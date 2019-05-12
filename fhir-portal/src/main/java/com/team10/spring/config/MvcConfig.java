package com.team10.spring.config;

import java.util.List;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.team10.spring.entities.FhirValueSet;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import ca.uhn.fhir.model.api.ExtensionDt;
import ca.uhn.fhir.model.dstu2.resource.ValueSet;

@Configuration
public class MvcConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // registry.addViewController("/").setViewName("home");
        registry.addViewController("/login").setViewName("login");
    }

    // @Bean
    // public MappingJackson2HttpMessageConverter customJackson2HttpMessageConverter() {
    //     System.out.println("Jackson mapper override is called...");
    //     MappingJackson2HttpMessageConverter jsonConverter = new MappingJackson2HttpMessageConverter();
    //     ObjectMapper mapper = new ObjectMapper();
    //     mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
    //     mapper.addMixIn(FhirValueSet.class, FhirValueSet.MixIn.class);
    //     mapper.addMixIn(FhirValueSet.Contact.class, FhirValueSet.MixIn.class);
    //     mapper.addMixIn(ExtensionDt.class, FhirValueSet.MixIn.class);
    //     jsonConverter.setObjectMapper(mapper);
    //     return jsonConverter;
    // }

    // @Override
    // public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
    //     converters.add(customJackson2HttpMessageConverter());
    //     super.configureMessageConverters(converters);
    // }

//    @Override
//    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        registry.addResourceHandler("/fhir-portal/public/**")
//                .addResourceLocations("classpath:/public/");
//        registry.addResourceHandler("/css/**")
//                .addResourceLocations("/css/");
//        registry.addResourceHandler("/img/**")
//                .addResourceLocations("/img/");
//        registry.addResourceHandler("/js/**")
//                .addResourceLocations("/js/");
//    }

}
