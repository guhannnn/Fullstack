package com.eventmanagement.event.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "bookings")
public class Bookings {

    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    @Column(nullable = false)
    private String bookingId;

    @Column(nullable = false)
    private String bookingname;

    @Column(nullable = false)
    private String status;
}