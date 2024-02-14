package com.eventmanagement.event.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.eventmanagement.event.models.User;
import com.eventmanagement.event.repository.UserRepo;
import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.Userresponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsImp implements UserService {
    private final UserRepo userRepo;

    @Override
    public BasicResponse <Userresponse> getAllUser(){
        List<User> users=userRepo.findAll();
        List<Userresponse> userResponses=users.stream().map(user-> Userresponse.builder()
        .id(user.getId())
        .username(user.getUsername())
        .image(user.getImage())
        .phonenumber(user.getPhonenumber())
        .gender(user.getGender())
        .address(user.getUseraddress())
        .role(user.getRole())
        .build()).collect(Collectors.toList());

        return BasicResponse.<Userresponse>builder().message("Hurrah!").data(userResponses).build();
        
    }

}