import React, { useState } from "react";
import Calendar from "react-calendar";

export default function BookingView() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div className="content">
        <Calendar styles={true} onChange={onChange} minDate={new Date()} />
        <div className="request-form">
          <ul>
            <li>Select a date and time and provide us your basic details.</li>
            <li>
              We will contact you & we’ll send you a confirmation of your
              appointment.
            </li>
            <li>
              Be sure to bring your NIC /Driver’s License or valid Passport.
            </li>
            <li>We look forward to meeting you.</li>
          </ul>
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="text" name="email" id="email" placeholder="Email" />
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Company"
          />
          <input type="text" name="nic" id="nic" placeholder="NIC" />
          <textarea
            name="message"
            id="message"
            placeholder="Issue/Message"
            cols={30}
            rows={5}
          ></textarea>
        </div>
      </div>
      <div className="send-btn">SEND BOOKING REQUEST</div>
      <style jsx>{`
        .content {
          display: flex;
          justify-content: space-around;
        }
        .request-form {
          font-weight: 350;
          font-size: 18px;
          line-height: 24px;
          color: #ffffff;
          display: flex;
          flex-direction: column;
        }
        .request-form input {
          height: 63.62px;
          margin-top: 15px;
          margin-bottom: 15px;
          padding-left: 20px;
          padding-right: 20px;
        }
        .request-form textarea {
          height: 217.57px;
          margin-top: 15px;
          margin-bottom: 15px;
          padding: 20px;
        }
        .send-btn {
          margin-top: 78px;
          cursor: pointer;
          display: flex;
    justify-content: center;
          font-weight: bold;
          font-size: 64px;
          line-height: 85px;
          background: -webkit-linear-gradient(#055476, #72c4de);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </>
  );
}
