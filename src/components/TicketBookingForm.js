import { useState } from "react";

const TicketBookingForm = ({ movieName, onClose }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    // Add more fields as needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("bookingData", JSON.stringify(formData));
    console.log("Form submitted:", formData);
    let numSeats=prompt("Enter the number of seats you want to book")
    alert(`You have successfully booked ${numSeats} ticket(s) for ${movieName}`)
    onClose();
  };

  return (
    <div className="ticket-booking-form">
      <h2>Book Tickets for {movieName}</h2>
      <form className="book" onSubmit={handleSubmit} >
        
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
          />
        <button type="submit">Submit</button>
      <button onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default TicketBookingForm;
