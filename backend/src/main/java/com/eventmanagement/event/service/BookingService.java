package com.eventmanagement.event.service;

import com.eventmanagement.event.dto.request.BookingRequest;
import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.BookingResponse;

public interface BookingService {
    BasicResponse<BookingResponse> getAllBookings();
     BasicResponse<BookingResponse> createBooking(BookingRequest bookingRequest);
     BasicResponse<BookingResponse>deletebooking(String bookingId);
     BasicResponse<BookingResponse> updateBooking(String bookingId, BookingRequest request);
    //  BasicResponse<BookingsResponse> createBooking(BookingRequest bookingRequest);
}