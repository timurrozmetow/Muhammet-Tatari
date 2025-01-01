import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Certificates.css";
import { useTranslation } from "react-i18next";


const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    { id: 1, title: "Certificate 1", image: "cert/cert (1).jpg" },
    { id: 2, title: "Certificate 2", image: "cert/cert (2).jpg" },
    { id: 3, title: "Certificate 3", image: "cert/cert (3).jpg" },
    { id: 4, title: "Certificate 4", image: "cert/cert (4).jpg" },
    { id: 5, title: "Certificate 5", image: "cert/cert (5).jpg" },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  const { t } = useTranslation();


  return (
    <div className="certificates-container">
      <motion.h2
        className="certificates-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t("cert")}
      </motion.h2>

      <motion.div
        className="certificates-slider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Slider {...settings}>
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              className="certificate-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => openModal(certificate.image)}
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="certificate-image"
              />
            </motion.div>
          ))}
        </Slider>
      </motion.div>

      {selectedImage && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={selectedImage} alt="Certificate" className="modal-image" />
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Certificates;
