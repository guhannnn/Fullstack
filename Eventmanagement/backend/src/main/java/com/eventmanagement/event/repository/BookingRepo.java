package com.eventmanagement.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventmanagement.event.models.Bookings;


public interface BookingRepo extends JpaRepository <Bookings, String> {
    // Optional<Bookings> findByID(String bookingId);
}