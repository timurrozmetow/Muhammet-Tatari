import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const availableLanguages = [
    { code: "en", label: "English", flag: "/icons/en.svg" },
    { code: "ru", label: "Russian", flag: "/icons/ru.svg" },
    { code: "tm", label: "Turkmen", flag: "/icons/tm.svg" },
    { code: "tr", label: "Turkish", flag: "/icons/tr.svg" },
    { code: "fa", label: "Farsi", flag: "/icons/fa.svg" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img className="ImgLogo" src="logo/q.webp" alt="Logo" />
      </div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          {t("certificates")}
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          {t("contact")}
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          {t("about")}
        </Link>
         <div className="language-switcher">
         <div className="selected-language">
            <img
              src={`/icons/${i18n.language}.svg`}
              alt={t("currentLanguage")}
              className="language-icon"
            />
          </div>
          <div className="language-menu">
            {availableLanguages
              .filter((lang) => lang.code !== i18n.language)
              .map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="language-button"
                >
                  <img src={lang.flag} alt={lang.label} className="language-icon" />
                  {lang.label}
                </button>
              ))}
          </div> 
          {menuOpen && (
        <div className="mobile-language-menu">
          {availableLanguages.map((lang) => (
            <div
              key={lang.code}
              className="mobile-language-item"
              onClick={() => changeLanguage(lang.code)}
            >
              <img src={lang.flag} alt={lang.label} className="mobile-language-icon" />
            </div>
          ))}
        </div>
      )}
        </div> 
      </div>
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
