import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./HomeCarousel.css";
import { useTranslation } from "react-i18next";

const HomeCarousel = () => {
  const { t } = useTranslation();
  const [currentWord, setCurrentWord] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [inView, setInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // состояние загрузки

  const words = [t("d1"), t("d2"), t("d3")];

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

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
    });

    const carouselElement = document.querySelector(".carousel");
    if (carouselElement) {
      observer.observe(carouselElement);
    }

    return () => {
      if (carouselElement) {
        observer.unobserve(carouselElement);
      }
    };
  }, []);

  // Установка таймера для скрытия градиента
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2 сек для градиента
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <div className="loading-gradient"></div>}
      <motion.div
        className="carousel"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="carousel-text"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="dobro">{t("dobro")}</p>
          <h1>MT International</h1>
          <p className={`changing-text ${fadeOut ? "fade-out" : "fade-in"}`}>
            {words[currentWord]}
          </p>
          <p className="w50">{t("welcome1")}</p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default HomeCarousel;
