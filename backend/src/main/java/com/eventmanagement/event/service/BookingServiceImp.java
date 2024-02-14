package com.eventmanagement.event.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.eventmanagement.event.dto.request.BookingRequest;
import com.eventmanagement.event.models.Bookings;
import com.eventmanagement.event.repository.BookingRepo;
import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.BookingResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookingServiceImp implements BookingService {

    private final BookingRepo bookingRepository;

     @Override
    public BasicResponse<BookingResponse> getAllBookings(){
         List<Bookings> bookings = bookingRepository.findAll();
          List<BookingResponse> bookingResponses = bookings.stream().map(booking-> BookingResponse.builder()
            .bookingId(booking.getBookingId())
            .bookingname(booking.getBookingname())
            .status(booking.getStatus())
            .cname(booking.getCname())
            .build())
            .collect(Collectors.toList());
        return BasicResponse.<BookingResponse>builder()
            .message(" data collected successfully")
            .data(bookingResponses)
            .build();
        }



    private final BookingRepo bookingsRepo;
    @Override
    public BasicResponse<BookingResponse> createBooking(BookingRequest request) {
        var book = Bookings.builder()
            .bookingId(request.getBookingId())
            .bookingname(request.getBookingname())
            .Cname(request.getCname())
            .status(request.getStatus())
            .build();
        bookingsRepo.save(book);
        return BasicResponse.<BookingResponse>builder()
            .message("Done")
            .build();
        }
   
        


        @Override
        public BasicResponse<BookingResponse> deletebooking(String bookingId) {
            // TODO Auto-generated method stub
            if (bookingsRepo.existsById(bookingId)) {
                bookingsRepo.deleteById(bookingId);
                return BasicResponse.<BookingResponse>builder()
                    .message("Booking deleted ")
                    .build();
            } else {
                return BasicResponse.<BookingResponse>builder()
                    .message("Booking not found : " + bookingId)
                    .build();
            }
        }
        @Override
        public BasicResponse<BookingResponse> updateBooking(String bookingId, BookingRequest request) {
            // Retrieve the existing booking from the repository
            Bookings existingBooking = bookingsRepo.findById(bookingId)
                    .orElseThrow(() -> new RuntimeException("Booking not found : " + bookingId));
        
            // Update the booking details
            existingBooking.setBookingname(request.getBookingname());
            existingBooking.setStatus(request.getStatus());
        
            // Save the updated booking to the repository
            bookingsRepo.save(existingBooking);
        
            // Construct and return the response
            BookingResponse updatedBookingResponse = mapToBookingResponse(existingBooking);
            return BasicResponse.<BookingResponse>builder()
                    .message("Booking updated ")
                    .data(List.of(updatedBookingResponse)) // Pass a list containing a single updated booking response
                    .build();
        }




        private BookingResponse mapToBookingResponse(Bookings existingBooking) {
            // TODO Auto-generated method stub
            throw new UnsupportedOperationException("Unimplemented method");
        }

}

