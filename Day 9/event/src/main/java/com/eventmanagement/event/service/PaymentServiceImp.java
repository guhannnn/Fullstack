package com.eventmanagement.event.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.eventmanagement.event.dto.request.BookingRequest;
import com.eventmanagement.event.dto.request.PayRequest;
import com.eventmanagement.event.models.Bookings;
import com.eventmanagement.event.models.Payments;
import com.eventmanagement.event.repository.BookingRepo;
import com.eventmanagement.event.repository.PaymentRepository;
import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.BookingResponse;
import com.eventmanagement.event.response.PaymentResponse;
import com.eventmanagement.event.service.BookingService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentServiceImp implements PaymentService {

    private final PaymentRepository payrep;

     @Override
    public BasicResponse<PaymentResponse> getAllPayments(){
         List<Payments> payments = payrep.findAll();
          List<PaymentResponse> PaymentResponses = payments.stream().map(payment-> PaymentResponse.builder()
          .paymentType(payment.getPaymentType())  
          .bookingId(payment.getBookingId())
            .paymentId(payment.getPaymentId())
            .amount(payment.getAmount())
            .build())
            .collect(Collectors.toList());
        return BasicResponse.<PaymentResponse>builder()
            .message("Details fetched successfully!!!")
            .data(PaymentResponses)
            .build();
        }



    private final PaymentRepository payrepp;
    @Override
    public BasicResponse<PaymentResponse> createPayment(PayRequest reques) {
        var pay = Payments.builder()
        .bookingId(reques.getBookingId())
        .paymentId(reques.getPaymentId())
        .paymentType(reques.getPaymentType())
        .amount(reques.getAmount())
        .build();
        payrepp.save(pay);
        return BasicResponse.<PaymentResponse>builder()
            .message("Success")
            .build();
        }
   
        


        @Override
        public BasicResponse<PaymentResponse> deletePayment(Long PaymentId) {
            // TODO Auto-generated method stub
            if (payrepp.existsById(PaymentId)) {
                payrepp.deleteById(PaymentId);
                return BasicResponse.<PaymentResponse>builder()
                    .message("Booking deleted successfully")
                    .build();
            } else {
                return BasicResponse.<PaymentResponse>builder()
                    .message("Booking not found with ID: " + PaymentId)
                    .build();
            }
        }
        @Override
        public
        BasicResponse<PaymentResponse> updatePayment(Long paymentId, PayRequest request){
            // Retrieve the existing booking from the repository
            Payments existingBooking = payrepp.findById(paymentId)
                    .orElseThrow(() -> new RuntimeException("Booking not found with id: " + paymentId));
        
            // Update the booking details
            existingBooking.setAmount(request.getAmount());
            existingBooking.setPaymentType(request.getPaymentType());
        
            // Save the updated booking to the repository
            payrepp.save(existingBooking);
        
            // Construct and return the response
            PaymentResponse updatedBookingResponse = mapToPaymentResponse(existingBooking);
            return BasicResponse.<PaymentResponse>builder()
                    .message("Booking updated successfully")
                    .data(List.of(updatedBookingResponse)) // Pass a list containing a single updated booking response
                    .build();
        }

        
            private PaymentResponse mapToPaymentResponse(Payments payment) {
                return PaymentResponse.builder()
                        .paymentId(payment.getPaymentId())
                        .bookingId(payment.getBookingId())
                        .amount(payment.getAmount())
                        .paymentType(payment.getPaymentType())
                        .build();
            
            
        }




        


        
}