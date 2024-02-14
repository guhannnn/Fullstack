package com.eventmanagement.event.service;

import com.eventmanagement.event.dto.request.LoginRequest;
import com.eventmanagement.event.dto.request.RegisterRequest;
import com.eventmanagement.event.response.LoginResponse;
import com.eventmanagement.event.response.RegisterResponse;

public interface AuthenticationService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
        
}
