import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Certificates.css";

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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
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

  return (
    <div className="certificates-container">
      <h2 className="certificates-title">Our Certificates</h2>
      <Slider {...settings}>
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="certificate-card"
            onClick={() => openModal(certificate.image)}
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="certificate-image"
            />
          </div>
        ))}
      </Slider>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Certificate" className="modal-image" />
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
