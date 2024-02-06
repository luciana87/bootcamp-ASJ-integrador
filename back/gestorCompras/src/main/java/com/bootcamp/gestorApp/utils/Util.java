package com.bootcamp.gestorApp.utils;

import java.time.format.DateTimeFormatter;

import org.modelmapper.ModelMapper;

public class Util {

    private static final ModelMapper MODEL_MAPPER = new ModelMapper();
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");
   
    public static ModelMapper getModelMapper() {
        return MODEL_MAPPER;
    }
    
    public static DateTimeFormatter getDateTimeFormatter() {
        return formatter;
    }
}