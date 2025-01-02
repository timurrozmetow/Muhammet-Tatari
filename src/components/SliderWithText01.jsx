import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion, useAnimation } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderWithText11.css";
import { useTranslation } from "react-i18next";

const SliderWithText01 = () => {
  const { t } = useTranslation();
  const sliderControls = useAnimation();
  const textControls = useAnimation();
  const [sliderRef, setSliderRef] = useState(null);
  const [textRef, setTextRef] = useState(null);

  const slides = [
    { id: 1, image: "1/mesh1.webp", alt: "Slide 1" },
    { id: 2, image: "1/mesh2.webp", alt: "Slide 2" },
    { id: 3, image: "1/mesh3.webp", alt: "Slide 3" },
    { id: 4, image: "1/mesh4.webp", alt: "Slide 4" },
    { id: 5, image: "1/mesh5.webp", alt: "Slide 5" },
  ];

  const sliderSettings11 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sliderControls.start({ opacity: 1, x: 0 });
        } else {
          sliderControls.start({ opacity: 0, x: 50 });
        }
      },
    );

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textControls.start({ opacity: 1, x: 0 });
        } else {
          textControls.start({ opacity: 0, x: -50 });
        }
      },
    );

    if (sliderRef) observer.observe(sliderRef);
    if (textRef) textObserver.observe(textRef);

    return () => {
      if (sliderRef) observer.unobserve(sliderRef);
      if (textRef) textObserver.unobserve(textRef);
    };
  }, [sliderRef, textRef, sliderControls, textControls]);

  return (
    <div className="slider-with-text-container11">
      <motion.div
        ref={setSliderRef}
        className="slider-section11"
        initial={{ opacity: 0, x: 50 }}
        animate={sliderControls}
        transition={{ duration: 0.5 }}
      >
        <Slider {...sliderSettings11}>
          {slides.map((slide) => (
            <div key={slide.id} className="slide-item11">
              <img src={slide.image} alt={slide.alt} className="slide-image11" />
            </div>
          ))}
        </Slider>
      </motion.div>
      <motion.div
        ref={setTextRef}
        className="text-section11"
        initial={{ opacity: 0, x: -50 }}
        animate={textControls}
        transition={{ duration: 0.5 }}
      >
        <h2>{t("s01")}</h2>
        <p>{t("s02")}</p>
        <ul className="styled-list1">
          <li>{t("s04")}</li>
          <li>{t("s05")}</li>
          <li>{t("s06")}</li>

        </ul>
      </motion.div>
    </div>
  );
};

export default SliderWithText01;
