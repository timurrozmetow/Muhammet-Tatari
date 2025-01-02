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
    setMenuOpen(false); // Close the menu after language change
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const availableLanguages = [
    { code: "en", label: "English" },
    { code: "ru", label: "Russian" },
    { code: "tm", label: "Turkmen" },
    { code: "tr", label: "Turkish" },
    { code: "fa", label: "Farsi" },
  ].filter((lang) => lang.code !== i18n.language);

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
              alt="Current Language"
              className="language-icon"
            />
          </div>
          <div className="language-menu">
            {availableLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="language-button"
              >
                <img
                  src={`/icons/${lang.code}.svg`}
                  alt={lang.label}
                  className="language-icon"
                />
              </button>
            ))}
          </div>
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
