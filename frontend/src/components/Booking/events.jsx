// import S3Uploader from "../components/S3Uploader";
// import CustomNavbar from "../components/customNavbar";
import "../Booking/events.css";  
import Navbar from "../Nabar";


const Events = () => {
  return (
   
    <div className="contain">
      <Navbar/>
    
    <>
  <title>Create Event</title>
 
  <div className="bg-img">
    <div className="contai">
      <h1>Create Event</h1>
      <input
        type="text"
        placeholder="Event Title"
        name="event_title"
        required=""
      />
      <input
        type="text"
        placeholder="Event Type"
        name="event_Type"
        required=""
      />
      <input
        type="date"
        placeholder="Event Date"
        name="event_date"
        required=""
      />
      <input
        type="time"
        placeholder="Event Time"
        name="event_time"
        required=""
      />
      <input
        type="text"
        placeholder="Event Location"
        name="event_location"
        required=""
      />
      <textarea
        placeholder="Event Description"
        name="event_description"
        rows={5}
        cols={30}
        defaultValue={""}
      />
      
      <input
        type="number"
        placeholder="Event Capacity"
        name="event_capacity"
        required=""
      />
      <br></br>
      <select className="s">
        <option>-Select-</option>
        <option>online</option>
        <option>in-person</option>
      </select>
      <button type="submit" className="btn">
        Create Event
      </button>
    </div>
  </div>
</>

  </div>
  
  );
};

export default Events;