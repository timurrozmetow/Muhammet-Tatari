import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderWithText11.css";
import { useTranslation } from "react-i18next";

const SliderWithText1111 = () => {
  const { t } = useTranslation();

  const slides = [
    { id: 1, image: "1/t1.jpg", alt: "Slide 1" },
    { id: 2, image: "1/t2.jpg", alt: "Slide 2" },
    { id: 3, image: "1/t3.jpg", alt: "Slide 3" },
  ];

  const sliderSettings11 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="slider-with-text-container11">
      <div className="slider-section11">
        <Slider {...sliderSettings11}>
          {slides.map((slide) => (
            <div key={slide.id} className="slide-item11">
              <img src={slide.image} alt={slide.alt} className="slide-image11" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="text-section11">
      <h2>{t("polyethyleneTitle")}</h2>
      <p>{t("polyethyleneDescription1")}</p>
      <ul className="styled-list">
        <li>{t("polyethyleneDescription4")}</li>
        <li>{t("polyethyleneDescription6")}</li>
      </ul>
      </div>
    </div>
  );
};

export default SliderWithText1111;
