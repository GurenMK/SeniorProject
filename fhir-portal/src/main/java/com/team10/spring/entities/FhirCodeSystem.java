package com.team10.spring.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import ca.uhn.fhir.model.dstu.resource.ConceptMap.Concept;
import ca.uhn.fhir.model.dstu2.resource.ValueSet.CodeSystem;

public class FhirCodeSystem extends CodeSystem implements Serializable {
    
    private static final long serialVersionUID = -7019950851951876796L;
    
    List<Map<String, String>> conceptData;
    List<Map<String, String>> getConceptData(){
        return this.conceptData;
    }

    FhirCodeSystem setConceptData(List<Map<String, String>> data){
        this.conceptData = data;
        return this;
    }

    Concept conceptTemplate;

    Concept getConceptTemplate(){
        return this.conceptTemplate;
    }

    FhirCodeSystem setConceptTemplate(Concept template){
        this.conceptTemplate = template;
        return this;
    }
}