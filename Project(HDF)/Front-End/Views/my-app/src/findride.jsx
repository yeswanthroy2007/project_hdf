import React, { useState } from 'react';
import { Users, MapPin } from 'lucide-react';
import './findride.css';

const RideForm = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    dateTime: '',
    price: '',
    seats: 1
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.from !== "Bennett University" && formData.to !== "Bennett University") {
      setError('Either "From" or "To" must be Bennett University');
      return;
    }

    console.log('Form submitted:', formData);
  };

  const incrementSeats = () => {
    if (formData.seats < 4) {
      setFormData(prevData => ({
        ...prevData,
        seats: prevData.seats + 1
      }));
    }
  };

  const decrementSeats = () => {
    if (formData.seats > 1) {
      setFormData(prevData => ({
        ...prevData,
        seats: prevData.seats - 1
      }));
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">FIND A RIDE</h2>
        <p className="form-subtitle">Share your journey with fellow travelers</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-with-icon">
              <div className="icon-container from-icon">
                <MapPin size={20} />
              </div>
              <input
                type="text"
                name="from"
                value={formData.from}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          <div className="connection-line">
            <div className="dot top-dot"></div>
            <div className="dot bottom-dot"></div>
          </div>

          <div className="form-group">
            <div className="input-with-icon">
              <div className="icon-container to-icon">
                <MapPin size={20} />
              </div>
              <input
                type="text"
                name="to"
                value={formData.to}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group date-time-group">
              <select
                name="dateTime"
                value={formData.dateTime}
                onChange={handleChange}
                className="form-select"
              >
                <option value="" disabled>Date & Time</option>
                <option value="today">Today</option>
                <option value="tomorrow">Tomorrow</option>
                <option value="custom">Custom Date</option>
              </select>
            </div>
          </div>

          <div className="seats-selector">
            <div className="seats-label">
              <Users size={20} />
              <span>Available Seats</span>
            </div>
            <div className="seats-control">
              <button 
                type="button" 
                className="seat-btn minus-btn" 
                onClick={decrementSeats}
                disabled={formData.seats <= 1}
              >-</button>
              <span className="seats-count">{formData.seats}</span>
              <button 
                type="button" 
                className="seat-btn plus-btn" 
                onClick={incrementSeats}
                disabled={formData.seats >= 4}
              >+</button>
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="passenger-icon-container">
            <div className="passenger-icon"></div>
          </div>

          <button type="submit" className="submit-btn">ADD RIDE</button>
        </form>
      </div>
    </div>
  );
};

export default RideForm;
