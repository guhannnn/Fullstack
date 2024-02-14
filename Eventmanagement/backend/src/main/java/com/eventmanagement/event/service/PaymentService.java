package com.eventmanagement.event.service;

import com.eventmanagement.event.dto.request.PayRequest;

import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.PaymentResponse;

public interface PaymentService {
    BasicResponse<PaymentResponse> getAllPayments();
    BasicResponse<PaymentResponse> createPayment(PayRequest paymentRequest);
    BasicResponse<PaymentResponse> deletePayment(Long paymentId);
    BasicResponse<PaymentResponse> updatePayment(Long paymentId, PayRequest paymentRequest);
}