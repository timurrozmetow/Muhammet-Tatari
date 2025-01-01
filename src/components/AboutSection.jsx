import React from "react";
import "./AboutSection.css"; // Подключите CSS файл

const AboutSection = () => {
  return (
    <div className="container">
      <div className="about-section">
        <h2>About us:</h2>
        <p className="w60">
          At MTI International, we are a global leader in sourcing and logistics
          management, dedicated to helping businesses succeed. With a strong
          network of partners and extensive expertise across industries, we
          ensure seamless and reliable operations from start to finish.
        </p>
      </div>

      <div className="stats">
        <div className="stat">
          <h3>5+</h3>
          <p>
            Fluent communication in Turkish, Turkmen, English, Russian, and
            Farsi ensures smooth collaboration across borders.
          </p>
        </div>
        <div className="stat">
          <h3>8+</h3>
          <p>
            years of experience: Trusted by clients worldwide to deliver
            cost-effective and reliable solutions.
          </p>
        </div>
        <div className="stat">
          <h3>9+</h3>
          <p>
            Industries served: Our expertise spans multiple sectors, including
            manufacturing, construction, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
