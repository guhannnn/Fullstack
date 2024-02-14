package com.eventmanagement.event.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventmanagement.event.models.User;

public interface UserRepo extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);

}
