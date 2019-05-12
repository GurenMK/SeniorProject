package com.team10.spring.services;

import ca.uhn.fhir.model.dstu2.resource.ValueSet;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import com.team10.spring.entities.FhirValueSet;

import org.springframework.web.multipart.MultipartFile;

public interface ApiService {

    public abstract List<Map<String, String>> parseFile(MultipartFile file) throws IOException;

}
