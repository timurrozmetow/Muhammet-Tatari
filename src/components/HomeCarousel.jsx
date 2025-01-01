import React, { useState, useEffect } from "react";
import "./HomeCarousel.css";
import { useTranslation } from "react-i18next";

const HomeCarousel = () => {
  const { t, i18n } = useTranslation();

  const [currentWord, setCurrentWord] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const words = [
    "Мероприятия мирового уровня!",
    "Глобальное влияние.",
    "Только лучшие решения."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentWord((prevWord) => (prevWord + 1) % words.length);
        setFadeOut(false);
      }, 500); // Время для плавного исчезновения
    }, 2500); // Общее время показа текста

    return () => clearInterval(interval);
  }, [words.length]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="carousel">
      <div className="carousel-text">
        <p className="dobro">Добро пожаловать!</p>
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
