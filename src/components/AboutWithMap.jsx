import React from "react";
import "./AboutWithMap.css"; // Подключение CSS для оформления

const AboutWithMap = () => {
  return (
    <div className="about-map-container">
      <div className="about-section">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer.
        </p>
      </div>
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
    </div>
  );
};

export default AboutWithMap;
