import React from "react";
import "./ContactForm.css"; // Подключение CSS

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Connect with Me</h2>
        <p>Have a question? Feel free to reach out!</p>
        <div className="social-icons">
          <a href="#" className="icon facebook" aria-label="Facebook"></a>
          <a href="#" className="icon instagram" aria-label="Instagram"></a>
          <a href="#" className="icon dribbble" aria-label="Dribbble"></a>
          <a href="#" className="icon email" aria-label="Email"></a>
        </div>
        <div className="phone-numbers">
          <p><strong>Phone:</strong> +989112761050</p>
          <p><strong>WhatsApp:</strong> +989382761050</p>
        </div>
      </div>

      <div className="contact-form">
        <h2>Contact Me</h2>
        <form>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="send-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
