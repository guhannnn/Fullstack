package com.eventmanagement.event.config;
// import static com.eventmanagement.event.enumerated.Role.ADMIN;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.eventmanagement.event.enumerated.Role;
import com.eventmanagement.event.models.User;
import com.eventmanagement.event.repository.UserRepo;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
// @SuppressWarnings("null")

public class UserCLI implements CommandLineRunner{
    
    private final UserRepo UserRepository;
    private final PasswordEncoder passwordEncoder;
    @Override
    public void run(String... args) throws Exception {
        if(UserRepository.count()>0)
            return;
            var user=User.builder()
                    .username("Guhan")
                    .email("Guhan@gmail.com")
                    .password(passwordEncoder.encode("Guhan@123"))
                    .role(Role.ADMIN)
                    .build();
            UserRepository.save(user);
        
    }

}
