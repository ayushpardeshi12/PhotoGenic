import React, { useState } from "react";

export function Contact(props) {
  return (
    <div className="container Contact-container">
      <h1 className="Abouth1">Contact Us</h1>

      <form method="">
        <label for="username">Name</label>
        <br />
        <input
          type="text"
          name="username"
          id="name"
          placeholder="Enter Your Name"
          required
        />
        <br />
        <label for="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email Address"
          required
        />
        <br />
        <label for="Message">Message</label>
        <br />
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Enter Your Message"
          required
        />
        <br />
        <button onCLick="" id="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
