// package com.eventmanagement.event.controller;

// import com.eventmanagement.event.dto.request.Edetailsrequest;
// import com.eventmanagement.event.response.BasicResponse;
// import com.eventmanagement.event.response.EdetailsResponse;
// import com.eventmanagement.event.service.EdetailService;
// import com.eventmanagement.event.utils.MyConstant;

// import lombok.RequiredArgsConstructor;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @RequestMapping(MyConstant.USERS)
// @RequiredArgsConstructor
// public class EveDetailsController {

//     private final EdetailService EdetailService;

//     @PostMapping(MyConstant.EVE)
//     public ResponseEntity<BasicResponse<EdetailsResponse>> createPayment(@RequestBody Edetailsrequest edetailsrequest) {
//         BasicResponse<EdetailsResponse> response = new BasicResponse<>();
//         try {
//             BasicResponse<EdetailsResponse> createdPaymentResponse = EdetailService.createBooking(edetailsrequest);
//             response.setMessage(createdPaymentResponse.getMessage());
//             response.setData(createdPaymentResponse.getData());
//             return new ResponseEntity<>(response, HttpStatus.OK);
//         } catch (Exception e) {
//             response.setMessage("Failed to create payment: " + e.getMessage());
//             return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
//         }
//     }
//     @GetMapping(MyConstant.EVE)
//         public ResponseEntity<BasicResponse<EdetailsResponse>> getAllBooking() {
//             BasicResponse<EdetailsResponse> response = new BasicResponse<>();
//             try {
//                 response = EdetailService.getAllBookings();
//                 return new ResponseEntity<>(response, HttpStatus.OK);
//             } catch (Exception e) {
//                 response.setMessage("No Payments");
//                 return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
//             }
//         }
//         @DeleteMapping(MyConstant.EVE + "/{EventId}")
//         public ResponseEntity<BasicResponse<EdetailsResponse>> deleteBooking(@PathVariable String eventId) {
//             BasicResponse<EdetailsResponse> response = new BasicResponse<>();
//             try {
//                 BasicResponse<EdetailsResponse> deletedBookingResponse = EdetailService.deletebooking(eventId);
//                 response.setMessage(deletedBookingResponse.getMessage());
//                 return new ResponseEntity<>(response, HttpStatus.OK);
//             } catch (Exception e) {
//                 response.setMessage("Failed to delete booking: " + e.getMessage());
//                 return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
//             }
//         }
//          @PutMapping(MyConstant.EVE + "/{EventId}")
// public ResponseEntity<BasicResponse<EdetailsResponse>> updateBooking(@PathVariable String eventId, @RequestBody Edetailsrequest payRequest) {
//     BasicResponse<EdetailsResponse> response = new BasicResponse<>();
//     try {
//         BasicResponse<EdetailsResponse> updatedBookingResponse = EdetailService.updateBooking(eventId, payRequest);
//         response.setMessage(updatedBookingResponse.getMessage());
//         response.setData(updatedBookingResponse.getData());
//         return new ResponseEntity<>(response, HttpStatus.OK);
//     } catch (Exception e) {
//         response.setMessage("Failed to update booking: " + e.getMessage());
//         return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
//     }
//     // Implement other CRUD endpoints for Payments as needed
// }
// }