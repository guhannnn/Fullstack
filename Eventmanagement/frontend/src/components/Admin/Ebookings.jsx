import { bookingList } from "../../Services/user";
import React, { useEffect, useState } from "react";
import "./Ebook.css";
import Navbar from "./AdminNavbar";

const Ebook = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = () => {
        bookingList()
            .then(response => {
                setBookings(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching bookings:", error);
            });
    };


    return (
        <div>
            <Navbar/>
        <div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Customer Name</th>
                            <th>EventName</th>
                           <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => (
                            <tr key={booking.bookingid}>
                              <td>{booking.bookingid}</td>
                                <td>{booking.cname}</td>
                                <td>{booking.bookingname}</td>
                                <td>{booking.status}</td>
                                <td>
                                    <div className="table__button-group">
                                        <button className="btn-view" onClick={() => handleView(booking)}>View</button>
                                        <button className="btn-edit" onClick={() => handleEdit(booking)}>Edit</button>
                                        <button className="btn-delete" onClick={() => handleDelete(booking)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default Ebook;
