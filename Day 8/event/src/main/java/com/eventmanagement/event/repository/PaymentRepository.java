package com.eventmanagement.event.repository;

import com.eventmanagement.event.models.Payments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payments, Long> {
    // Define custom query methods if needed
}
