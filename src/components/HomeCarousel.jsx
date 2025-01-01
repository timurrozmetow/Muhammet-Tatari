import React, { useState, useEffect } from "react";
import "./HomeCarousel.css";
import { useTranslation } from "react-i18next";

const HomeCarousel = () => {
  const { t, i18n } = useTranslation();

  const [currentWord, setCurrentWord] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const words = [
    t("d1"),
    t("d2"),
    t("d3")
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentWord((prevWord) => (prevWord + 1) % words.length);
        setFadeOut(false);
      }, 500);
    }, 2500); 

    return () => clearInterval(interval);
  }, [words.length]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="carousel">
      <div className="carousel-text">
        <p className="dobro">{t("dobro")}</p>
        <h1>MTI International</h1>
        <p className={`changing-text ${fadeOut ? "fade-out" : "fade-in"}`}>
          {words[currentWord]}
        </p>
        <p className="w50">{t("welcome1")}</p>
      </div>
    </div>
  );
};

export default HomeCarousel;
