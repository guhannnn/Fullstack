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
    public static final List<String> ORGINS=Arrays.asList("http://localhost:5173");
    public static final List<String> HEADERS=Arrays.asList(AUTHORIZATION, CONTENT_TYPE);
    public static final List<String> METHODS=Arrays.asList(GET.name(),POST.name(),PUT.name(),PATCH.name(),DELETE.name(), HttpMethod.HEAD.name());
    public static final String USERS="/api/v1/users";
    public static final String LIST="/list";
    public static final String BOOK="/book";
    public static final String PAY="/pay";
    public static final String EVE="/det";
    public static final String SWAGGER_LOCALHOST_URL = "http://localhost:8181";
    public static final String SWAGGER_SECURITY_SCHEME_NAME = "bearerAuth";
    public static final String SWAGGER_SCHEME = "bearer";
    public static final String SWAGGER_BEARER_FORMAT = "JWT";
    public static final String SWAGGER_DESCRIPTION = "produce a json token";
}
