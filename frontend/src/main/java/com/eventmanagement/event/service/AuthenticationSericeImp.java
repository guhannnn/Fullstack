package com.eventmanagement.event.service;


import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.eventmanagement.event.dto.request.LoginRequest;
import com.eventmanagement.event.dto.request.RegisterRequest;
import com.eventmanagement.event.enumerated.Role;
import com.eventmanagement.event.models.User;
import com.eventmanagement.event.repository.UserRepo;
import com.eventmanagement.event.response.LoginResponse;
import com.eventmanagement.event.response.RegisterResponse;
import com.eventmanagement.event.utils.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class AuthenticationSericeImp implements AuthenticationService {
    private final UserRepo userRepository;
    private final AuthenticationManager authenticationmanager;
    private final JwtUtil jwtutil;
    private final PasswordEncoder passwordEncoder;
    @Override
    public RegisterResponse register(RegisterRequest request){
        Optional<User> isUserExists=userRepository.findByEmail(request.getEmail());
        if(isUserExists.isPresent()){
            return RegisterResponse.builder().message("User with mail ID "+request.getEmail()+" already exists").build();
        }
        var user=User.builder()
        .username(request.getName())
            .email(request.getName())
            .password(passwordEncoder.encode(request.getPassword()))
            .role(Role.USER).build();
        userRepository.save(user);
        return RegisterResponse.builder().message("Registration Successful").build();
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        // TODO Auto-generated method stub
        authenticationmanager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user=userRepository.findByEmail(request.getEmail()).orElseThrow();
        String token=jwtutil.generateToken(user);
        return LoginResponse.builder()
        .message("User logged in Suuccessfully")
        .token(token)
        .build();
        
    }
}
