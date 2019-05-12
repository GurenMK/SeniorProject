package com.team10.spring.services;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.stereotype.Service;

@Service
public class FieldParser {
    final static String pattern = "\\[(.*?)\\]";
    Pattern r;
    Map<String, String> data;
    
    FieldParser(){
        this(pattern, new HashMap<String, String>());
    }

    public FieldParser(Map<String, String> data){
        this(pattern, data);
    }

    FieldParser(String p, Map<String, String> data){
        this.r = Pattern.compile(p);
        this.data = data;
    }

    public String parse(String value){
        return this._parseFunc(value);
    }

    private String _parseFunc(String str){
        Matcher m = r.matcher(str);
        StringBuilder builder = new StringBuilder();
        int i = 0;
        while(m.find()){
            int start = m.start();
            int end = m.end();
            String match = m.group(1);
            // System.out.println("found: " + match);
            String  rep = this.data.get(match);
            builder.append(str.substring(i, start));
            if(rep == null){
                rep = m.group(0);
            }

            builder.append(rep);
            i = end;
        }
        builder.append(str.substring(i, str.length()));
        return builder.toString();
    }
}