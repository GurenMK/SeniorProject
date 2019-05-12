package com.team10.spring.controllers;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.team10.spring.entities.FhirOperationOutcome;
import com.team10.spring.entities.FhirValueSet;
import com.team10.spring.services.ApiService;
import com.team10.spring.services.ValueSetService;

import org.hibernate.validator.constraints.NotBlank;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import ca.uhn.fhir.model.dstu.resource.Organization.Contact;
import ca.uhn.fhir.model.dstu2.resource.ValueSet;

@RestController
@RequestMapping("/api")
@SessionAttributes("importer")
public class ApiController {

	private static final Logger logger = LoggerFactory.getLogger(ApiController.class);

    private ValueSetService valueSetService;
    private ApiService apiService;

    @Autowired
    public void setValueSetService(ValueSetService valueSetService) {
        this.valueSetService = valueSetService;
    }
    @Autowired
    public void setApiService(ApiService apiService) {
        this.apiService = apiService;
    }

    @RequestMapping(value = "/importer/files", method = RequestMethod.POST, consumes = {"multipart/form-data"})
    @ResponseBody
	public List<Map<String, String>> importerFiles(Model model, @RequestPart("file") @Valid @NotNull @NotBlank MultipartFile file ) throws IOException {
        System.out.println("Uploaded File: ");
        System.out.println("Name : " + file.getName());
        System.out.println("Type : " + file.getContentType());
        System.out.println("Name : " + file.getOriginalFilename());
        System.out.println("Size : " + file.getSize());

        System.out.print("model: ");
        System.out.println(model);

        return this.apiService.parseFile(file);
    }
    
    @RequestMapping(value = "/importer", method = RequestMethod.POST)
    public Object importerImport(@RequestBody FhirValueSet valueSet){
        System.out.print("value set: ");
        System.out.println(valueSet);
        System.out.print("codeSystem: ");
        // System.out.println(new ValueSet(valueSet));
        // System.out.println(valueSet.getCodeSystem());
        
        return this.valueSetService.add(valueSet);
        // return "";
    }
}
