import React, { useState } from 'react';
import './ridebooking.css';

const BookRideForm = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    dateTime: '',
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

    console.log("Booking submitted:", formData);
    // API call or action here
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">BOOK A RIDE</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleChange}
              placeholder="From"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleChange}
              placeholder="To"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <div className="select-wrapper">
              <select
                name="dateTime"
                value={formData.dateTime}
                onChange={handleChange}
                className="form-select"
              >
                <option value="" disabled selected>Date & Time</option>
                <option value="today">Today</option>
                <option value="tomorrow">Tomorrow</option>
                <option value="custom">Custom</option>
              </select>
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="user-icons">
            <span className="user-icon"></span>
            <span className="user-icon"></span>
            <span className="user-icon"></span>
            <span className="user-icon"></span>
          </div>

          <div className="button-container">
            <button type="submit" className="submit-btn">BOOK</button>
          </div>
        </form>
      </div>

      <div className="cancel-btn-container">
        <button className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default BookRideForm;