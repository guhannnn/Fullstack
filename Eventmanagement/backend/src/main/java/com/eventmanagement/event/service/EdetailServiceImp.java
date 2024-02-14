// package com.eventmanagement.event.service;

// import java.util.List;
// import java.util.stream.Collectors;

// import org.springframework.stereotype.Service;

// import com.eventmanagement.event.dto.request.Edetailsrequest;
// import com.eventmanagement.event.models.EveDetails;
// import com.eventmanagement.event.repository.EdetRepo;
// import com.eventmanagement.event.response.BasicResponse;
// import com.eventmanagement.event.response.EdetailsResponse;

// import lombok.RequiredArgsConstructor;

// @Service
// @RequiredArgsConstructor
// public class EdetailServiceImp implements EdetailService {

//     private final EdetRepo eveDetailsRepository;

//     @Override
//     public BasicResponse<EdetailsResponse> getAllBookings() {
//         List<EveDetails> eveDetailsList = eveDetailsRepository.findAll();
//         List<EdetailsResponse> eveDetailsResponses = eveDetailsList.stream().map(events->EdetailsResponse.builder()
//        .eventId(events.getEventId())
//        .catering_details(events.getCatering_details())
//        .event_category(events.getEvent_category())
//        .location(events.getLocation())
//        .requirements(events.getRequirements())
//        .build())
//        .collect(Collectors.toList());
//         return BasicResponse.<EdetailsResponse>builder()
//                 .message("Data collected successfully")
//                 .data(eveDetailsResponses)
//                 .build();
//     }

//     @Override
//     public BasicResponse<EdetailsResponse> createBooking(Edetailsrequest events) {
//         var book = EveDetails.builder()
//         .eventId(events.getEventId())
//         .catering_details(events.getCatering_details())
//         .event_category(events.getEvent_category())
//         .location(events.getLocation())
//         .requirements(events.getRequirements())
//         .build();
//         eveDetailsRepository.save(book);
//         return BasicResponse.<EdetailsResponse>builder()
//             .message("Done")
//             .build();
//         }

//       @Override
//         public BasicResponse<EdetailsResponse> deletebooking(String eventId) {
//             // TODO Auto-generated method stub
//             if (eveDetailsRepository.existsById(eventId)) {
//                 eveDetailsRepository.deleteById(eventId);
//                 return BasicResponse.<EdetailsResponse>builder()
//                     .message("Booking deleted ")
//                     .build();
//             } else {
//                 return BasicResponse.<EdetailsResponse>builder()
//                     .message("Booking not found : " + eventId)
//                     .build();
//             }
//         }
//         @Override
//         public BasicResponse<EdetailsResponse> updateBooking(String eventId, Edetailsrequest request) {
//             // Retrieve the existing booking from the repository
//             EveDetails existingBooking = eveDetailsRepository.findById(eventId)
//                     .orElseThrow(() -> new RuntimeException("Booking not found : " + eventId));
        
//             // Update the booking details
//             existingBooking.setCatering_details(request.getCatering_details());
//             existingBooking.setEvent_category(request.getEvent_category());
        
//             // Save the updated booking to the repository
//             eveDetailsRepository.save(existingBooking);
        
//             // Construct and return the response
//             EdetailsResponse updatedBookingResponse = mapToEveDetailsResponse(existingBooking);
//             return BasicResponse.<EdetailsResponse>builder()
//                     .message("Booking updated ")
//                     .data(List.of(updatedBookingResponse)) // Pass a list containing a single updated booking response
//                     .build();
//         }


//     // Implement other methods as needed

//     private EdetailsResponse mapToEveDetailsResponse(EveDetails eveDetails) {
//         return EdetailsResponse.builder()
//                 .eventId(eveDetails.getEventId())
//                 .event_category(eveDetails.getEvent_category())
//                 .location(eveDetails.getLocation())
//                 // Map other fields accordingly
//                 .build();
//     }

    // private EveDetails mapToEveDetails(Edetailsrequest request) {
    //     return EveDetails.builder()
    //             .event_category(request.getEvent_category())
    //             .location(request.getLocation())
    //             // Map other fields accordingly
    //             .build();
    // }

    // @Override
    // public BasicResponse<EdetailsResponse> getAllBookings() {
    //     // TODO Auto-generated method stub
    //     throw new UnsupportedOperationException("Unimplemented method 'getAllBookings'");
    // }
// }
