package com.eventmanagement.event.utils;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpHeaders.CONTENT_TYPE;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.PATCH;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpMethod;

public class MyConstant {
    public static final String AUTH="/api/v1/auth";
    public static final String REGISTER="/register";
    public static final String LOGIN="/login";
    public static final List<String> ORGINS=Arrays.asList("http://localhost:4000");
    public static final List<String> HEADERS=Arrays.asList(AUTHORIZATION, CONTENT_TYPE);
    public static final List<String> METHODS=Arrays.asList(GET.name(),POST.name(),PUT.name(),PATCH.name(),DELETE.name(), HttpMethod.HEAD.name());
}
