package com.team10.spring.services;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.team10.spring.entities.FhirValueSet;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class ApiServiceImpl implements ApiService {

    @Override
    public List<Map<String, String>> parseFile(MultipartFile file) throws IOException {
        final String _delimeter = "\t";
        BufferedReader br;
        List<Map<String, String>> result = new ArrayList<Map<String, String>>();

        String line;
        InputStream is = file.getInputStream();
        String[] headers = new String[0];
        int count = 0;
        br = new BufferedReader(new InputStreamReader(is));

        while ((line = br.readLine()) != null) {
            String[] row = line.split(_delimeter);
            ++count;
            if (count == 1) {
                headers = row;
                continue;
            }

            Map<String, String> value = new HashMap<String, String>();
            for (int i = 0; i < row.length; ++i) {
                value.put(headers[i], row[i]);
            }
            result.add(value);
        }

        return result;
    }

}
