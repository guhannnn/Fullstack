package com.eventmanagement.event.controller;

import org.springframework.web.bind.annotation.RestController;

import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.Userresponse;
import com.eventmanagement.event.service.UserService;
import com.eventmanagement.event.utils.MyConstant;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping(MyConstant.USERS)
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    @GetMapping(MyConstant.LIST)
    public ResponseEntity<BasicResponse<Userresponse>> create(){
        System.out.println("Hello");
        BasicResponse<Userresponse> response=new BasicResponse<>();
        try{
            response=userService.getAllUser();
            return new ResponseEntity<>(response,HttpStatus.OK);
        }
        catch(Exception e){
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }
    }

}