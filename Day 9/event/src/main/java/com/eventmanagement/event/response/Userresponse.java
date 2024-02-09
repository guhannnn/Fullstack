package com.eventmanagement.event.response;

import com.eventmanagement.event.enumerated.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Userresponse {
    private String id;
    private String username;
    private String image;
    private Role role;
    private Long phonenumber;
    private String gender;
    private String address;
}