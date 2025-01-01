import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderWithText.css"; // Подключите CSS для оформления
import { useTranslation } from "react-i18next";

const SliderWithText2 = () => {
  const { t } = useTranslation();

  const slides = [
    { id: 1, image: "1/d1.jpg", alt: "Slide 1" },
    { id: 2, image: "1/d2.jpg", alt: "Slide 2" },
    { id: 3, image: "1/d3.jpg", alt: "Slide 3" },
    { id: 4, image: "1/d4.jpg", alt: "Slide 4" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-with-text-container">
      <div className="slider-section">
        <Slider {...sliderSettings}>
          {slides.map((slide) => (
            <div key={slide.id} className="slide-item">
              <img src={slide.image} alt={slide.alt} className="slide-image" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="text-section">
        <h2>{t("metalsTitle")}</h2>
        <p>{t("metalsDescription1")}</p>
        <p>{t("metalsDescription2")}</p>
        <ul className="styled-list">
          <li>{t("metalsDescription3")}</li>
          <li>{t("metalsDescription4")}</li>
        </ul>
      </div>
    </div>
  );
};

export default SliderWithText2;
