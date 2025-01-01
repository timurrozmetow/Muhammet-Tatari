import React from "react";
import "./AboutSection.css"; 
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="container">
      <div className="about-section">
        <h2>{t("aboutGen")}</h2>
        <p className="w60">
        {t("about1")}
        </p>
      </div>

      <div className="stats">
        <div className="stat">
          <h3>5+</h3>
          <p>
          {t("about2")}
          </p>
        </div>
        <div className="stat">
          <h3>8+</h3>
          <p>
          {t("about3")}
          </p>
        </div>
        <div className="stat">
          <h3>9+</h3>
          <p>
          {t("about4")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
