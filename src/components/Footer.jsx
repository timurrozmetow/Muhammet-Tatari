import React from "react";
import "./Footer.css";
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
          <p className="footer-tagline">MTI International</p>
        </div>

        <div className="footer-contact">
          <h4>{t("contact")}</h4>
          <ul>
            <li>
              <a href="mailto:Mmtatari17@gmail.com" className="footer-icon-link">
                Mmtatari17@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+989112761050" className="footer-icon-link">
                +989112761050
              </a>
            </li>
            <li>
              <a href="tel:+989382761050" className="footer-icon-link">
                +989382761050
              </a>
            </li>
            <li className="footer-icon-link">
              {t("add")}
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>{t("Follow")}</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 8H7V11H9V20H12V11H14.5L15 8H12V7C12 6.46957 12.2107 5.96086 12.5858 5.58579C12.9609 5.21071 13.4696 5 14 5H15V2H14C12.9391 2 11.9217 2.42143 11.1716 3.17157C10.4214 3.92172 10 4.93913 10 6V8H9Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C15.3137 4 18 6.68629 18 10C18 13.3137 15.3137 16 12 16C8.68629 16 6 13.3137 6 10C6 6.68629 8.68629 4 12 4ZM18.5 7C19.0523 7 19.5 6.55228 19.5 6C19.5 5.44772 19.0523 5 18.5 5C17.9477 5 17.5 5.44772 17.5 6C17.5 6.55228 17.9477 7 18.5 7Z" />
              </svg>
            </a>
            <a href="https://www.whatsapp.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.995 20.204C15.3574 20.9946 13.5438 21.3749 11.703 21.33C6.99997 21.253 3.24997 17.503 3.17297 12.799C3.12686 10.9694 3.49715 9.15604 4.28701 7.518L3.14501 4.831C2.97301 4.438 3.39701 4.032 3.78001 4.231L7.15001 5.943C8.82896 4.75597 10.8912 4.05016 13.015 4.00004C17.719 3.92304 21.469 7.67304 21.546 12.377C21.591 14.217 21.2106 16.0306 20.421 17.668L22.134 21.039C22.333 21.422 21.927 21.846 21.534 21.674L18.847 20.532C18.2098 20.7976 17.5467 21.0215 16.865 21.202V21.202ZM8.56797 14.442C9.25518 15.1015 10.0684 15.6257 10.973 15.986C11.5803 16.2293 12.243 16.333 12.902 16.29C13.118 16.27 13.328 16.176 13.475 16.024C13.768 15.737 13.952 15.344 13.967 14.924C13.975 14.731 13.946 14.537 13.882 14.353C13.719 13.809 13.527 13.286 13.309 12.78C13.207 12.549 13.056 12.353 12.874 12.207C12.625 11.99 12.38 12.028 12.111 12.137C11.915 12.211 11.708 12.275 11.5 12.336C11.299 12.395 11.081 12.401 10.884 12.281C10.438 11.975 10.009 11.644 9.59797 11.291C9.14013 10.8895 8.74684 10.4147 8.42997 9.88504C8.25497 9.58904 8.30597 9.38204 8.39697 9.12204C8.49497 8.85004 8.58097 8.57204 8.64097 8.28904C8.69297 8.04004 8.64597 7.77904 8.47797 7.58204C8.33197 7.40504 8.12397 7.31204 7.89797 7.33604C7.43097 7.38904 7.01397 7.62904 6.69397 7.99904C6.38597 8.36104 6.18597 8.81504 6.11297 9.30004C6.00196 10.187 6.295 11.0709 6.92997 11.744L8.56797 14.442Z" />
              </svg>
            </a>
            <a href="https://www.telegram.org" className="social-icon" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM16.212 7.84502L6.682 11.453C6.314 11.591 6.303 11.844 6.628 11.95L9.273 12.804L14.81 9.735C14.997 9.631 15.164 9.7 15.034 9.804L11.403 12.577H11.402C11.255 12.684 11.279 12.744 11.402 12.845L13.445 14.255C13.644 14.394 13.815 14.324 13.866 14.084L16.313 8.582C16.405 8.33702 16.205 8.22402 16.212 7.84502Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {t("res")}</p>
      </div>
    </footer>
  );
};

export default Footer;
