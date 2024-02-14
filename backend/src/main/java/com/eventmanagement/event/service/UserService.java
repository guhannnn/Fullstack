package com.eventmanagement.event.service;

import com.eventmanagement.event.response.BasicResponse;

import com.eventmanagement.event.response.Userresponse;

public interface UserService {
     BasicResponse<Userresponse> getAllUser();
}