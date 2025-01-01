import React, { useState } from "react";
import "./ContactForm.css";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mpwwyean", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <div className="contact-container">
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.1867723047717!2d55.184102499999995!3d37.3217426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8295770c9ffa03%3A0x8d72b94d7897e7fb!2sBita%20Soule%20Gonbad!5e1!3m2!1sru!2sro!4v1735546487636!5m2!1sru!2sro"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-form">
        <h2>{t("ContactMe")}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder={t("Contact1")} required />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder={t("Contact2")}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder={t("Contact3")}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="send-button">
            {t("Contact4")}
          </button>
        </form>
        {status === "success" && (
          <div className="status-message success">
            <p>✔️ {t("successMessage")}</p>
          </div>
        )}
        {status === "error" && (
          <div className="status-message error">
            <p>❌ {t("errorMessage")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
