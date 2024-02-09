package com.eventmanagement.event.response;

import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EdetailsResponse {
    private long event_id;
    private String event_category;
    private String location;
    private LocalTime time;
    private String requirements;
    private String catering_details;
    private String menu;
    private int slots;
    private long user_id;
}