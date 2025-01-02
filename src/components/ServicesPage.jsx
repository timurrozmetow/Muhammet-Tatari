import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaTruck, FaProjectDiagram, FaShoppingCart } from "react-icons/fa";
import "./ServicesPage.css";
import { useTranslation } from "react-i18next";

const ServicesPage = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [refElements, setRefElements] = useState([]);

  const services = [
    {
      id: 1,
      icon: <FaShoppingCart />,
      title: t("ServicesPage"),
      description: t("ServicesTitle"),
    },
    {
      id: 2,
      icon: <FaTruck />,
      title: t("ServicesPage1"),
      description: t("ServicesTitle1"),
    },
    {
      id: 3,
      icon: <FaProjectDiagram />,
      title: t("ServicesPage2"),
      description: t("ServicesTitle2"),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            controls.start((custom) => ({
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.4,
                delay: custom * 0.2,
              },
            }));
          } else {
            controls.start({ opacity: 0, x: entry.target.dataset.index % 2 === 0 ? -50 : 50 });
          }
        });
      },
    );

    refElements.forEach((el) => observer.observe(el));

    return () => {
      refElements.forEach((el) => observer.unobserve(el));
    };
  }, [refElements, controls]);

  return (
    <div className="services-container">
      <motion.h2
        className="services-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("Services")}
      </motion.h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="service-card"
            ref={(el) => setRefElements((prev) => [...prev.filter((e) => e !== el), el])}
            custom={index}
            data-index={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
