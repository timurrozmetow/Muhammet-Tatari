import React from "react";
import { motion } from "framer-motion";
import "./IranProductsPage.css";
import { useTranslation } from "react-i18next";

const IranProductsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="iran-products-container">
      <motion.div
        className="iran-products-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>MT International</h1>
        <h2>{t("ir1")}</h2>
      </motion.div>

      <motion.div
        className="iran-products-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <p>{t("ir2")}</p>
      </motion.div>

      <motion.div
        className="iran-products-cta"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h3>{t("ir3")}</h3>
        <p>{t("ir4")}</p>
        <a href="tel:+989112761050" className="cta-button">
          {t("ir5")}
        </a>
      </motion.div>

      <div className="iran-products-highlights">
        <motion.div
          className="highlight-card"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3>{t("ir6")}</h3>
          <p>{t("ir7")}</p>
        </motion.div>
        <motion.div
          className="highlight-card"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>{t("ir8")}</h3>
          <p>{t("ir9")}</p>
        </motion.div>
        <motion.div
          className="highlight-card"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h3>{t("ir10")}</h3>
          <p>{t("ir11")}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default IranProductsPage;
