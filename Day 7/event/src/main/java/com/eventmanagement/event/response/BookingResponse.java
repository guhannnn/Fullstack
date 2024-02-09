package com.eventmanagement.event.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingResponse {
    private String bookingId;
    private String bookingname;
    private String status;
   
}