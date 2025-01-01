import React from "react";
import { motion } from "framer-motion";
import { FaTruck, FaProjectDiagram, FaShoppingCart } from "react-icons/fa";
import "./ServicesPage.css";
import { useTranslation } from "react-i18next";

const ServicesPage = () => {
  const { t } = useTranslation();

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

  return (
    <div className="services-container">
      <motion.h2
        className="services-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t("Services")}
      </motion.h2>
      <div className="services-grid">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="service-card"
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
