package com.team10.spring.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import ca.uhn.fhir.model.dstu2.resource.ValueSet.Contact;

public class FhirContact extends Contact {

    @Override
    @JsonIgnore
    public Contact setName(String theString) {
        return super.setName(theString);
    }
   

}