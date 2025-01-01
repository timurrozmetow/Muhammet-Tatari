import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./AboutSection.css";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  const [elementsInView, setElementsInView] = useState([]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setElementsInView((prev) => [...new Set([...prev, entry.target])]);
        } else {
          setElementsInView((prev) => prev.filter((el) => el !== entry.target));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    const elements = document.querySelectorAll(".scroll-animation");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="container">
      <motion.div
        className="about-section scroll-animation"
        initial={{ opacity: 0, y: 50 }}
        animate={
          elementsInView.includes(document.querySelector(".about-section"))
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 50 }
        }
        transition={{ duration: 0.8 }}
      >
        <h2>{t("aboutGen")}</h2>
        <p className="w60">{t("about1")}</p>
      </motion.div>

      <div className="stats">
        <motion.div
          className="stat scroll-animation"
          initial={{ opacity: 0, x: -50 }}
          animate={
            elementsInView.includes(document.querySelector(".stat:nth-child(1)"))
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: -50 }
          }
          transition={{ duration: 0.8 }}
        >
          <h3>5+</h3>
          <p>{t("about2")}</p>
        </motion.div>

        <motion.div
          className="stat scroll-animation"
          initial={{ opacity: 0, x: -50 }}
          animate={
            elementsInView.includes(document.querySelector(".stat:nth-child(2)"))
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: -50 }
          }
          transition={{ duration: 0.8 }}
        >
          <h3>8+</h3>
          <p>{t("about3")}</p>
        </motion.div>

        <motion.div
          className="stat scroll-animation"
          initial={{ opacity: 0, x: -50 }}
          animate={
            elementsInView.includes(document.querySelector(".stat:nth-child(3)"))
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: -50 }
          }
          transition={{ duration: 0.8 }}
        >
          <h3>9+</h3>
          <p>{t("about4")}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
