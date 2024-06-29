import React, { useState } from "react";
import "./Contact.scss";

const BOT_TOKEN = "7313879684:AAH0lhoKddXhkYP-YO5QnYueauqqT3J9hzE";
const CHAT_ID = "-1002180292093";

function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let text = "Contact Form Submission:%0A";
    text += `Fullname: <b>${formData.fullname}</b>%0A`;
    text += `Email: <b>${formData.email}</b>%0A`;
    text += `Message: <b>${formData.message}</b>`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;

    const api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

 
    setFormData({
      fullname: "",
      email: "",
      message: "",
    });
  };

  return (
    <section>
      <div className="contact-container container">
        <div className="contact-info container">
          <h2 className="contact-title">Get in touch</h2>
          <p className="contact-email">contact@e-comm.ng</p>
          <p className="contact-phone">+234 4556 6665 34</p>
          <p className="contact-address">
            20 Prince Hakerem Lekki Phase 1, Lagos
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullname" className="form-label">
              Fullname
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              required
            />
          </div>
          <button type="submit" className="submit-btn search-button">
            Send Message
          </button>
        </form>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search query..."
        />
        <button className="search-button">Search</button>
      </div>
    </section>
  );
}

export default Contact;
