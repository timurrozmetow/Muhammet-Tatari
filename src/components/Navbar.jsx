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
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img className="ImgLogo" src="logo/q.webp" alt="logo" />
      </div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="nav-link"
          onClick={closeMenu}
        >
          {t("about")}
        </Link>
        <Link
          to="capacity"
          smooth={true}
          duration={500}
          className="nav-link"
          onClick={closeMenu}
        >
          {t("capacity")}
        </Link>
        <Link
          to="railways"
          smooth={true}
          duration={500}
          className="nav-link"
          onClick={closeMenu}
        >
          {t("wagon")}
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="nav-link"
          onClick={closeMenu}
        >
          {t("certificates")}
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="nav-link"
          onClick={closeMenu}
        >
          {t("contact")}
        </Link>
        <div className="language-switcher">
          <button onClick={() => changeLanguage("en")}>EN</button>
          <button onClick={() => changeLanguage("ru")}>RU</button>
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
