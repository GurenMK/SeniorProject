package com.team10.spring.entities;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import com.team10.spring.services.FieldParser;

import ca.uhn.fhir.model.api.annotation.Child;
import ca.uhn.fhir.model.dstu2.resource.ValueSet;

// @JsonDeserialize(using = )
public class FhirValueSet {
    private static final long serialVersionUID = -7726985394454900015L;
    String name, resourceType, url, version, status, publisher, date, description, requirements, copyright;
    List<Contact> contact;
    Meta meta;
    CodeSystem codeSystem;

    public static String indent(String str) {
        return str.replaceAll("(?m)^", "\t");
    }

    public static String indent(Object obj) {
        if (obj == null) {
            return "";
        }
        return indent(obj.toString());
    }

    public String toString() {
        String str = String.format(
                "resourceType: %s\n" + "url: %s\n" + "version; %s\n" + "status: %s\n" + "publisher: %s\n" + "date: %s\n"
                        + "description: %s\n" + "requirements: %s\n" + "copyright: %s\n" + "meta: %s\n"
                        + "contact: \n\t%s\n" + "codeSystem: \n\t%s\n",
                this.resourceType, this.url, this.version, this.status, this.publisher, this.date, this.description,
                this.requirements, this.copyright, indent(this.getMeta()), indent(this.contact),
                indent(this.codeSystem));
        return str;
    }

    public ValueSet toValueSet() {
        ValueSet newSet = new ValueSet();
        // newSet.setName(set.getName());
        // newSet.setUrl(set.getUrl());
        Method[] GS = this.getClass().getMethods();
        for( int i = 0; i < GS.length; ++i){
            Method method = GS[i];
            String mName = method.getName();
            if(!isGetter(mName)){
                continue;
            }
            try{
                String prefix = "get";
                if(mName.startsWith("is")){
                    prefix = "is";
                }
                newSet.getClass()
                      .getMethod(
                            mName.replace(prefix, "set"), 
                            method.getReturnType()
                       ).invoke(
                           newSet, 
                           method.invoke(this, null)
                        );
            }catch (NoSuchMethodException e) {
               System.err.println("No Such Method error: " + e.getMessage());
            }catch (IllegalArgumentException e) {
                System.err.println("IllegalArgumentException: " + e.getMessage());
            }catch (IllegalAccessException e) {
                System.err.println("IllegalAccessException: " + e.getMessage());
             }catch (InvocationTargetException e) {
                System.err.println("InvocationTargetException: " + e.getMessage());
             }catch(SecurityException e){
                System.err.println("SecurityException: " + e.getMessage());
             }
        }
        return newSet;
    }
    private static boolean isGetter(String name){
        return name.startsWith("get") || name.startsWith("is");
    }

    public static class CodeSystemSerializer extends StdSerializer<CodeSystem> {
        private static final long serialVersionUID = 1L;

        public CodeSystemSerializer() {
            this(null);
        }
        public CodeSystemSerializer(Class<CodeSystem> t){
            super(t);
        }

        @Override
        public void serialize(
            CodeSystem value, JsonGenerator jgen, SerializerProvider provider) 
                throws IOException, JsonProcessingException {
    
            jgen.writeStartObject();
            jgen.writeStringField("system", value.getSystem());
            jgen.writeStringField("version", value.getVersion());
            jgen.writeBooleanField("caseSensitive", value.isCaseSensitive());
            jgen.writeArrayFieldStart("concept");
            for (Concept c : value.getConcept()) {
                jgen.writeObject(c);
            }
            jgen.writeEndArray();
            jgen.writeEndObject();
            System.out.println("Serializing: " + jgen);
        }
    }
    
    @JsonSerialize(using = CodeSystemSerializer.class)
    public static class CodeSystem {
        
        private String system, version;
        private boolean caseSensitive;
        private Concept conceptTemplates;
        private List<Concept> concept;
        private Map<String, String>[] conceptData;

        public String toString() {
            return String.format(
                "system: %s\n" + 
                "version: %s\n" + 
                "concept: %s\n" +
                "conceptTemplate: \n%s\n" + 
                "conceptData: \n%s\n",
                this.system, 
                this.version, 
                indent(this.getConcept()),
                indent(this.getConceptTemplates()), 
                indent(this.getConceptData()));
        }

        /**
         * @return the syste
         */
        public String getSystem() {
            return system;
        }

        /**
         * @param syste the syste to set
         * @return
         */
        public CodeSystem setSystem(String system) {
            this.system = system;
            return this;
        }

        /**
         * @return the version
         */
        public String getVersion() {
            return version;
        }

        /**
         * @param version the version to set
         * @return
         */
        public CodeSystem setVersion(String version) {
            this.version = version;
            return this;
        }

        @JsonIgnore
        public CodeSystem setVersion(int version){
            this.version = String.valueOf(version);
            return this;
        }

        /**
         * @return the caseSensitive
         */
        public boolean isCaseSensitive() {
            return caseSensitive;
        }

        /**
         * @param caseSensitive the caseSensitive to set
         */
        public CodeSystem setCaseSensitive(boolean caseSensitive) {
            this.caseSensitive = caseSensitive;
            return this;
        }

        /**
         * @return the conceptTemplates
         */
        public Concept getConceptTemplates() {
            return conceptTemplates;
        }

        /**
         * @param conceptTemplates the conceptTemplates to set
         */
        public void setConceptTemplates(Concept conceptTemplates) {
            this.conceptTemplates = conceptTemplates;
        }

        /**
         * @return the conceptData
         */
        public Map<String, String>[] getConceptData() {
            return conceptData;
        }

        /**
         * @param conceptData the conceptData to set
         */
        public void setConceptData(Map<String, String>[] conceptData) {
            this.conceptData = conceptData;
        }

        /**
         * @return the concepts
         */
        public List<Concept> getConcept() {
            if(concept == null){
                concept = new ArrayList<Concept>();
            }
            return concept;
        }

        /**
         * @param concepts the concepts to set
         */
        public void setConcept(List<Concept> concept) {
            this.concept = concept;
        }
    }

    public static class Contact {
        String name;

        public String toString() {
            String str = String.format("\nname: %s\n", this.name);
            return str;
        }

        /**
         * @return the name
         */
        public String getName() {
            return name;
        }

        /**
         * @param name the name to set
         */
        public Contact setName(String name) {
            this.name = name;
            return this;
        }
    }

    public static class Meta {
        int versionId;
        String lastUpdated;

        public String toString() {
            String str = String.format("versionId: %s\n", this.versionId);
            str += String.format("lastUpdated: %s\n", this.lastUpdated);
            return str;
        }

        /**
         * @return the versionId
         */
        public int getVersionId() {
            return versionId;
        }

        /**
         * @param versionId the versionId to set
         */
        public void setVersionId(int versionId) {
            this.versionId = versionId;
        }

        /**
         * @return the lastUpated
         */
        public String getLastUpdated() {
            return lastUpdated;
        }

        /**
         * @param lastUpated the lastUpated to set
         */
        public void setLastUpdated(String lastUpdated) {
            this.lastUpdated = lastUpdated;
        }
    }

    public static class Designation {
        String language;

        public String toString() {
            String str = String.format("language: %s\n", this.language);
            return str;
        }

        /**
         * @return the language
         */
        public String getLanguage() {
            return language;
        }

        /**
         * @param language the language to set
         */
        public void setLanguage(String language) {
            this.language = language;
        }
    }

    public static class Concept {
        String code, display, definition;
        @Child(name = "abstract", summary = false, modifier = false)
        @JsonProperty("abstract")
        private boolean _abstract;

        public void parse(Concept template, FieldParser p){
            this.code = p.parse(template.getCode());
            this.display = p.parse(template.getDisplay());
            this.definition = p.parse(template.getDefinition());
            this.setAbstract(template.is_abstract());
            this.setDesignation(template.getDesignation());
        }

        // public boolean getAbstract() {
        //     return this._abstract;
        // }

        public Concept setAbstract(Boolean value) {
            this._abstract = value;
            return this;
        }

        List<Designation> designation;

        public String toString() {
            return  String.format("\ncode: %s\n", this.code)
            + String.format("display: %s\n", this.display)
            + String.format("definition: %s\n", this.definition)
            + String.format("abstract: %s\n", this.is_abstract());
            // str += "\t" + designation.toString();
        }

        /**
         * @return the code
         */
        public String getCode() {
            return code;
        }

        /**
         * @param code the code to set
         */
        public void setCode(String code) {
            this.code = code;
        }

        /**
         * @return the display
         */
        public String getDisplay() {
            return display;
        }

        /**
         * @param display the display to set
         */
        public void setDisplay(String display) {
            this.display = display;
        }

        /**
         * @return the definition
         */
        public String getDefinition() {
            return definition;
        }

        /**
         * @param definition the definition to set
         */
        public void setDefinition(String definition) {
            this.definition = definition;
        }

        /**
         * @return the _abstract
         */
        @JsonProperty("abstract")
        public boolean is_abstract() {
            return _abstract;
        }

        /**
         * @return the designation
         */
        public List<Designation> getDesignation() {
            if(this.designation == null){
                this.designation = new ArrayList<>();
            }
            return designation;
        }

        /**
         * @param designation the designation to set
         */
        public void setDesignation(List<Designation> designation) {
            this.designation = designation;
        }
    }

    /**
     * @return the resourceType
     */
    public String getResourceType() {
        return resourceType;
    }

    /**
     * @param resourceType the resourceType to set
     */
    public void setResourceType(String resourceType) {
        this.resourceType = resourceType;
    }

    /**
     * @return the url
     */
    public String getUrl() {
        return url;
    }

    /**
     * @param url the url to set
     */
    public FhirValueSet setUrl(String url) {
        this.url = url;
        return this;
    }

    /**
     * @return the version
     */
    public String getVersion() {
        return version;
    }

    /**
     * @param version the version to set
     */
    public FhirValueSet setVersion(String version) {
        this.version = version;
        return this;
    }

    /**
     * @return the status
     */
    public String getStatus() {
        return status;
    }

    /**
     * @param status the status to set
     */
    public void setStatus(String status) {
        this.status = status;
    }

    /**
     * @return the publisher
     */
    public String getPublisher() {
        return publisher;
    }

    /**
     * @param publisher the publisher to set
     */
    public FhirValueSet setPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }

    /**
     * @return the date
     */
    public String getDate() {
        return date;
    }

    /**
     * @param date the date to set
     */
    public void setDate(String date) {
        this.date = date;
    }

    /**
     * @return the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description the description to set
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * @return the requirements
     */
    public String getRequirements() {
        return requirements;
    }

    /**
     * @param requirements the requirements to set
     */
    public void setRequirements(String requirements) {
        this.requirements = requirements;
    }

    /**
     * @return the copyright
     */
    public String getCopyright() {
        return copyright;
    }

    /**
     * @param copyright the copyright to set
     */
    public void setCopyright(String copyright) {
        this.copyright = copyright;
    }

    /**
     * @return the contact
     */
    public java.util.List<Contact> getContact() {
        return contact;
    }

    /**
     * @param contact the contact to set
     */
    public void setContact(List<Contact> contact) {
        this.contact = contact;
    }

    /**
     * @return the meta
     */
    public Meta getMeta() {
        return meta;
    }

    /**
     * @param meta the meta to set
     */
    public FhirValueSet setMeta(Meta meta) {
        this.meta = meta;
        return this;
    }

    /**
     * @return the codeSystem
     */
    public CodeSystem getCodeSystem() {
        return codeSystem;
    }

    /**
     * @param codeSystem the codeSystem to set
     */
    public void setCodeSystem(CodeSystem codeSystem) {
        this.codeSystem = codeSystem;
    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }
}
