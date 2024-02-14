// package com.eventmanagement.event.service;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.eventmanagement.event.dto.request.BookingRequest;
// import com.eventmanagement.event.models.Booking;
// import com.eventmanagement.event.models.User;
// import com.eventmanagement.event.repository.BookingRepo;
// import com.eventmanagement.event.repository.UserRepo;

// @Service
// public class BookingService {

//     private final BookingRepo bookingRepository;
//     private final UserRepo userRepository;

//     @Autowired
//     public BookingService(BookingRepo bookingRepository, UserRepo userRepository) {
//         this.bookingRepository = bookingRepository;
//         this.userRepository = userRepository;
//     }

//     public Booking createBooking(BookingRequest bookingRequestDTO) {
//         // Assuming you have a User entity with findById method in UserRepository
//         Optional<User> userOptional = userRepository.findById(bookingRequestDTO.getUserId());

//         if (userOptional.isPresent()) {
//             User user = userOptional.get();

//             Booking newBooking = Booking.builder()
//                     .place(bookingRequestDTO.getPlace())
//                     .event(bookingRequestDTO.getEvent())
//                     .time(bookingRequestDTO.getTime())
//                     .venue(bookingRequestDTO.getVenue())
//                     .user(user)
//                     .build();

//             return bookingRepository.save(newBooking);
//         } else {
//             // Handle the case where the user with the given ID is not found
//             throw new Exception("User not found with ID: " + bookingRequestDTO.getUserId());
//         }
//     }
// }
