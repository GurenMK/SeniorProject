package com.team10.spring.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.team10.spring.entities.FhirValueSet;
import com.team10.spring.entities.FhirValueSet.Concept;

import org.apache.http.client.methods.HttpHead;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.model.api.Bundle;
import ca.uhn.fhir.model.api.BundleEntry;
import ca.uhn.fhir.model.api.IResource;
import ca.uhn.fhir.model.dstu2.resource.ValueSet;
import ca.uhn.fhir.model.primitive.IdDt;
import ca.uhn.fhir.parser.IParser;
import ca.uhn.fhir.rest.api.MethodOutcome;
import ca.uhn.fhir.rest.client.IGenericClient;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class ValueSetServiceImpl implements ValueSetService {

    private static final Logger logger = LoggerFactory.getLogger(ValueSetServiceImpl.class);

    private static String fhirServerBase;

    @Value("${fhir.server.base}")
    public void setFhirServerBase(String fhirServerBase) {
        ValueSetServiceImpl.fhirServerBase = fhirServerBase;
    }

    @Override
    public List<ValueSet> findAllValueSets() {
        FhirContext ctx = FhirContext.forDstu2();

        List<ValueSet> valueSetList = new ArrayList<>();

        String base = ValueSetServiceImpl.fhirServerBase;
        String allValueSetsUrl = base;// + "/ValueSet/_history";
        // System.out.println(allValueSetsUrl);
        IGenericClient client = ctx.newRestfulGenericClient(base);

        Set<String> valueSetIdHashSet = new HashSet<>();

        // Conformance conf =
        // client.fetchConformance().ofType(Conformance.class).execute();
        // System.out.println(conf.getDescriptionElement().getValue());

        // System.out.println(allValueSetsUrl);
        // // Perform a search
        // Bundle vs = client
        // .search()
        // .byUrl(allValueSetsUrl)
        // .encodedJson()
        // .execute();
        //
        // System.out.println("Found " + vs.getEntries().size() + " valuesets");

        // Perform a search
        Bundle results = client.history().onServer()
                // .byUrl(allValueSetsUrl)
                // .encodedJson()
                .andReturnDstu1Bundle().count(100)
                // .encodedJson()
                .execute();

        // System.out.println("Found " + results.getEntries().size() + " valuesets");

        IParser jsonParser = ctx.newJsonParser();
        jsonParser.setPrettyPrint(true);

        String bd = jsonParser.encodeBundleToString(results);

        Bundle bd2 = jsonParser.parseBundle(bd);

        List<BundleEntry> be = bd2.getEntries();

        for (BundleEntry bundleEntry : be) {
            IResource ir = bundleEntry.getResource();

            IdDt irId = ir.getId();

            String id = irId.getIdPart();

            if (valueSetIdHashSet.contains(id.toString())) {
                continue;
            }

            valueSetIdHashSet.add(id.toString());
            // System.out.println(ir.getResourceMetadata().values());

            Object[] meta = ir.getResourceMetadata().values().toArray();

            // ignore deleted valuesets
            if (meta[meta.length - 1].toString() == "DELETE") {
                continue;
            }

            ValueSet valueSet = client.read().resource(ValueSet.class).withUrl(irId.toString())
                    // .encodedJson()
                    .execute();

            // System.out.println(jsonParser.encodeResourceToString(valueSet));
            // System.out.println("valueset id: ");
            // System.out.println(valueSet.getId());
            // System.out.println(valueSet.getCodeSystem().getSystem());
            // System.out.println(valueSet.getUrl());

            // String vUrl = valueSet.getId().toString();

            // int startIndex = vUrl.indexOf("ValueSet/") + 9;
            // int endIndex = vUrl.indexOf("/_history");
            //// System.out.println(startIndex);
            //// System.out.println(endIndex);
            //
            // String valueSetId = vUrl.substring(startIndex, endIndex);
            // System.out.println();

            valueSetList.add(valueSet);
        }

        return valueSetList;
    }

    @Override
    public List<ValueSet> findAllValueSetsBySearchString(String searchText) {

        FhirContext ctx = FhirContext.forDstu2();

        List<ValueSet> valueSetList = new ArrayList<>();

        String base = ValueSetServiceImpl.fhirServerBase;
        String allValueSetsUrl = base + "/ValueSet?code=" + searchText;
        IGenericClient client = ctx.newRestfulGenericClient(base);

        Set<String> valueSetIdHashSet = new HashSet<>();

        // Conformance conf =
        // client.fetchConformance().ofType(Conformance.class).execute();
        // System.out.println(conf.getDescriptionElement().getValue());

        // System.out.println(allValueSetsUrl);
        // // Perform a search
        // Bundle vs = client
        // .search()
        // .byUrl(allValueSetsUrl)
        // .encodedJson()
        // .execute();
        //
        // System.out.println("Found " + vs.getEntries().size() + " valuesets");

        // Perform a search
        Bundle results = client.search().byUrl(allValueSetsUrl).encodedJson()
                // .returnBundle(Bundle.class)
                .execute();

        // System.out.println("Found " + results.getEntries().size() + " valuesets");

        IParser jsonParser = ctx.newJsonParser();
        jsonParser.setPrettyPrint(true);

        String bd = jsonParser.encodeBundleToString(results);

        Bundle bd2 = jsonParser.parseBundle(bd);

        List<BundleEntry> be = bd2.getEntries();

        for (BundleEntry bundleEntry : be) {
            IResource ir = bundleEntry.getResource();

            IdDt irId = ir.getId();

            String id = irId.getIdPart();

            // System.out.println("ID:");
            // System.out.println(ir.getId());
            // System.out.println(ir.getResourceName());
            // System.out.println(ir.getResourceMetadata());
            // System.out.println(bundleEntry.getResource());

            // System.out.println("valueset id: " + id);

            ValueSet valueSet = client.read().resource(ValueSet.class).withUrl(irId.toString())
                    // .encodedJson()
                    .execute();

            // System.out.println(jsonParser.encodeResourceToString(valueSet));
            System.out.println("valueset id: ");
            System.out.println(valueSet.getId());
            System.out.println(valueSet.getCodeSystem().getSystem());
            System.out.println(valueSet.getUrl());

            String vUrl = valueSet.getId().toString();

            int startIndex = vUrl.indexOf("ValueSet/") + 9;
            int endIndex = vUrl.indexOf("/_history");
            System.out.println(startIndex);
            System.out.println(endIndex);

            String valueSetId = vUrl.substring(startIndex, endIndex);
            // System.out.println();

            // filter out old valuesets
            if (!valueSetIdHashSet.contains(valueSetId)) {
                valueSetList.add(valueSet);
                valueSetIdHashSet.add(valueSetId);
            }
        }

        return valueSetList;
    }

    @Override
    public ValueSet findValueSetByValueSetId(String valuesetId) {

        FhirContext ctx = FhirContext.forDstu2();

        String base = ValueSetServiceImpl.fhirServerBase;
        IGenericClient client = ctx.newRestfulGenericClient(base);
        String valuesetUrl = base + "/ValueSet/" + valuesetId;

        ValueSet valueSet = client.read().resource(ValueSet.class).withUrl(valuesetUrl)
                // .encodedJson()
                .execute();

        return valueSet;
    }

    @Override
    public ValueSet findValueSetByValueSetIdAndVersion(String valuesetId, int version) {

        FhirContext ctx = FhirContext.forDstu2();

        String base = ValueSetServiceImpl.fhirServerBase;
        IGenericClient client = ctx.newRestfulGenericClient(base);
        String valuesetUrl = base + "/ValueSet/" + valuesetId + "/_history/" + version;

        ValueSet valueSet = client.read().resource(ValueSet.class).withUrl(valuesetUrl)
                // .encodedJson()
                .execute();

        return valueSet;
    }

    @Override
    public ValueSet findValueSetByValueSetCode(String code) {
        System.out.println("searching by code...");

        FhirContext ctx = FhirContext.forDstu2();

        List<ValueSet> valueSetList = new ArrayList<>();

        String base = ValueSetServiceImpl.fhirServerBase;
        String allValueSetsUrl = base + "/ValueSet?code=" + code;
        IGenericClient client = ctx.newRestfulGenericClient(base);

        // Conformance conf =
        // client.fetchConformance().ofType(Conformance.class).execute();
        // System.out.println(conf.getDescriptionElement().getValue());

        // System.out.println(allValueSetsUrl);
        // // Perform a search
        // Bundle vs = client
        // .search()
        // .byUrl(allValueSetsUrl)
        // .encodedJson()
        // .execute();
        //
        // System.out.println("Found " + vs.getEntries().size() + " valuesets");

        // Perform a search
        Bundle results = client.search().byUrl(allValueSetsUrl).encodedJson()
                // .returnBundle(Bundle.class)
                .execute();

        // System.out.println("Found " + results.getEntries().size() + " valuesets");

        IParser jsonParser = ctx.newJsonParser();
        jsonParser.setPrettyPrint(true);

        String bd = jsonParser.encodeBundleToString(results);

        Bundle bd2 = jsonParser.parseBundle(bd);

        List<BundleEntry> be = bd2.getEntries();

        ValueSet valueSet = new ValueSet();
        valueSet.setDescription("NOT FOUND");

        if (be.size() > 0) {
            IResource ir = be.get(0).getResource();

            IdDt irId = ir.getId();

            String id = irId.getIdPart();

            valueSet = client.read().resource(ValueSet.class).withUrl(irId.toString())
                    // .encodedJson()
                    .execute();

            // System.out.println(jsonParser.encodeResourceToString(valueSet));
            System.out.println("valueset id: ");
            System.out.println(valueSet.getId());
            System.out.println(valueSet.getCodeSystem().getSystem());
            System.out.println(valueSet.getUrl());

            String vUrl = valueSet.getId().toString();

            int startIndex = vUrl.indexOf("ValueSet/") + 9;
            int endIndex = vUrl.indexOf("/_history");
            System.out.println(startIndex);
            System.out.println(endIndex);

            System.out.println(vUrl.substring(startIndex, endIndex));

            valueSetList.add(valueSet);
        }

        return valueSet;
    }

    @Override
    public void updateValueSet(String id, String vsCodeDisplay, ValueSet valueSet) {

        FhirContext ctx = FhirContext.forDstu2();
        String base = ValueSetServiceImpl.fhirServerBase;
        IGenericClient client = ctx.newRestfulGenericClient(base);

        System.out.println(valueSet.getCodeSystem().getSystem());
        System.out.println(valueSet.getId());
        System.out.println(valueSet.getCodeSystem().getConcept().size());

        // valueSet = findValueSetByValueSetId(id);

        // valueSet.setName(name);
        // valueSet.setId("ValueSet/" + id);
        String system = valueSet.getCodeSystem().getSystem();
        int lastIndex = system.lastIndexOf("/") + 1;
        system = system.substring(0, lastIndex);
        System.out.println("new system:");
        System.out.println(system + vsCodeDisplay);
        valueSet.getCodeSystem().setSystem(system + vsCodeDisplay);

        System.out.println(valueSet.getCodeSystem().getSystem());
        System.out.println(valueSet.getId());
        System.out.println(valueSet.getCodeSystem().getConcept().size());

        MethodOutcome outcome = client.update().resource(valueSet).execute();

    }

    @Override
    public ValueSet findValueSetById(String valuesetId) {
        ValueSet valueSet = findValueSetByValueSetId(valuesetId);

        // System.out.println(jsonParser.encodeResourceToString(valueSet));
        System.out.println("valueset id: ");
        System.out.println(valueSet.getCodeSystem().getSystem());
        System.out.println(valueSet.getUrl());

        System.out.println(valueSet.getCodeSystem().getConcept().get(0).getDisplay());
        System.out.println(valueSet.getCodeSystem().getSystem());

        return valueSet;
    }

    @Override
    public ValueSet findValueSetByIdAndVersion(String valuesetId, int version) {
        ValueSet valueSet = findValueSetByValueSetIdAndVersion(valuesetId, version);

        return valueSet;
    }

    @Override
    public List<Integer> findVersionsByValueSetId(String valuesetId) {
        List<Integer> versions = new ArrayList<>();

        FhirContext ctx = FhirContext.forDstu2();

        List<ValueSet> valueSetList = new ArrayList<>();

        String base = ValueSetServiceImpl.fhirServerBase;
        String allValueSetsUrl = base;// + "/ValueSet/_history";
        // System.out.println(allValueSetsUrl);
        IGenericClient client = ctx.newRestfulGenericClient(base);

        Set<String> valueSetIdHashSet = new HashSet<>();

        // Conformance conf =
        // client.fetchConformance().ofType(Conformance.class).execute();
        // System.out.println(conf.getDescriptionElement().getValue());

        // System.out.println(allValueSetsUrl);
        // // Perform a search
        // Bundle vs = client
        // .search()
        // .byUrl(allValueSetsUrl)
        // .encodedJson()
        // .execute();
        //
        // System.out.println("Found " + vs.getEntries().size() + " valuesets");

        // Perform a search
        Bundle results = client.history().onServer()
                // .byUrl(allValueSetsUrl)
                // .encodedJson()
                .andReturnDstu1Bundle().count(100)
                // .encodedJson()
                .execute();

        IParser jsonParser = ctx.newJsonParser();
        jsonParser.setPrettyPrint(true);

        String bd = jsonParser.encodeBundleToString(results);

        Bundle bd2 = jsonParser.parseBundle(bd);

        List<BundleEntry> be = bd2.getEntries();

        int i = 1;
        for (BundleEntry bundleEntry : be) {

            IResource ir = bundleEntry.getResource();

            IdDt irId = ir.getId();

            String id = irId.getIdPart();

            if (valuesetId.equals(id)) {
                versions.add(i);
                i++;
            }
        }

        // requested they be in reverse chrono order
        Collections.reverse(versions);

        return versions;
    }

    // public static ValueSet findCodeByValueSetIdAndCodeCode(String valuesetId,
    // String codeCode) {
    // ValueSet valueSet = findValueSetByValueSetId(valuesetId);
    //
    // System.out.println(jsonParser.encodeResourceToString(valueSet));
    // System.out.println("valueset id: ");
    // System.out.println(valueSet.getCodeSystem().getSystem());
    // System.out.println(valueSet.getUrl());
    //
    // System.out.println(valueSet.getCodeSystem().getConcept().get(0).getDisplay());
    // System.out.println(valueSet.getCodeSystem().getSystem());
    //
    //
    // return valueSet;
    // }

    @Override
    public ValueSet findValueSetByCode(String code) {
        System.out.println("find by code: " + code);
        ValueSet valueSet = findValueSetByValueSetCode(code);
        System.out.println("FOUND by code: " + code);

        return valueSet;
    }

    @Override
    public Object add(FhirValueSet valueset) {
        Map<String, String>[] data = valueset.getCodeSystem().getConceptData();
        List<Concept> list = new ArrayList<>();
        for (Map<String, String> row : data) {
            Concept newConcept = new Concept();
            FieldParser p = new FieldParser(row);
            newConcept.parse(valueset.getCodeSystem().getConceptTemplates(), p);
            // System.out.println(newConcept);
            list.add(newConcept);
        }
        // System.out.println(valueset);
        // ValueSet fhirSet = valueset.toValueSet();
        // System.out.println("to set: ");
        // System.out.println(fhirSet);
        valueset.getCodeSystem().setConcept(list);
        System.out.println("All set:....");
        System.out.println(valueset);
        try{
            ObjectMapper om = new ObjectMapper();
            String json = om.writeValueAsString(valueset);
            System.out.println("json: " + json);
        }catch(JsonProcessingException e){
            System.err.println("JsonProcessingException: " + e.getMessage());
        }
        
        // FhirContext ctx = FhirContext.forDstu2();
        // IParser jsonParser = ctx.newJsonParser();
        // jsonParser.
        String base = ValueSetServiceImpl.fhirServerBase;
        String path = base + "/ValueSet";
        RestTemplate c = new RestTemplate();
        // HttpHeaders headers = new HttpHeaders();
        // headers.setContentType(MediaType.APPLICATION_JSON);
        // HttpEntity<FhirValueSet> request = new HttpEntity<>(valueset, headers);
        
        // ResponseEntity<String> response = c.exchange(
        //     path, HttpMethod.POST, request, String.class);
        // System.out.println("code: " + response.getStatusCode());

        // System.out.print("response: ");

        return c.postForEntity(path, valueset, String.class);
    }

    
}
