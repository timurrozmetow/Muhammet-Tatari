import React from 'react';
import './Footer.css';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="logo/q.webp" alt="Logo" className="footer-img-logo" />
          <p className="footer-tagline">Grand Millennium</p>
        </div>

        <div className="footer-contact">
          <h4>{t("contact")}</h4>
          <ul>
            <li><a href="mailto:info@grand-millennium.ae"><i className="fas fa-envelope"></i>info@grand-millennium.ae</a></li>
            <li><a href="mailto:sales@grand-millennium.ae"><i className="fas fa-envelope"></i>sales@grand-millennium.ae</a></li>
            <li><a href="tel:+971509724457"><i className="fas fa-phone-alt"></i>+ 971 509724457</a></li>
            <li><i className="fas fa-map-marker-alt"></i>{t("add")}</li>
        </ul>

        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {t("res")} </p>
      </div>
    </footer>
  );
};

export default Footer;
