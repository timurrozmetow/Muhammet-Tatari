import React from "react";
import Slider from "react-slick";
import "./SliderWithText.css"; // Подключите CSS для оформления
import { useTranslation } from "react-i18next";

const SliderWithText = () => {
  const { t } = useTranslation();

  const slides = [
    { id: 1, image: "1/m1.png", alt: "Slide 1" },
    { id: 2, image: "1/m2.png", alt: "Slide 2" },
    { id: 3, image: "1/m3.png", alt: "Slide 3" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
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
        <h2>{t("metalStructuresTitle")}</h2>
        <p>{t("metalStructuresDescription1")}</p>
        <ul className="styled-list">
          
          <li>{t("metalStructuresDescription2")}</li>
          <li>{t("metalStructuresDescription3")}</li>
        </ul>
      </div>
    </div>
  );
};

export default SliderWithText;
