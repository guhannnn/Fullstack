package com.eventmanagement.event.dto.request;

import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Edetailsrequest {
    private String eventId;
    private String event_category;
    private String location;
    private LocalTime time;
    private String requirements;
    private String catering_details;
    private String menu;
    private int slots;
    private long user_id;
    private String venue;
}
