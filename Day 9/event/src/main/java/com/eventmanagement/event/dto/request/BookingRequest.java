package com.eventmanagement.event.dto.request;

import com.eventmanagement.event.models.EveDetails;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequest {
    private String bookingId;
    private String bookingname;
    private String status;
}
