import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion, useAnimation } from "framer-motion";
import "./SliderWithText.css";
import { useTranslation } from "react-i18next";

const SliderWithText = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const textControls = useAnimation();
  const [ref, setRef] = useState(null);
  const [textRef, setTextRef] = useState(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, x: 0 });
        } else {
          controls.start({ opacity: 0, x: -50 });
        }
      },
      { threshold: 0.5 }
    );

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textControls.start({ opacity: 1, x: 0 });
        } else {
          textControls.start({ opacity: 0, x: 50 });
        }
      },
      { threshold: 0.5 }
    );

    if (ref) observer.observe(ref);
    if (textRef) textObserver.observe(textRef);

    return () => {
      if (ref) observer.unobserve(ref);
      if (textRef) textObserver.unobserve(textRef);
    };
  }, [ref, textRef, controls, textControls]);

  return (
    <div className="slider-with-text-container">
      <motion.div
        ref={setRef}
        className="slider-section"
        initial={{ opacity: 0, x: -50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <Slider {...sliderSettings}>
          {slides.map((slide) => (
            <div key={slide.id} className="slide-item">
              <img src={slide.image} alt={slide.alt} className="slide-image" />
            </div>
          ))}
        </Slider>
      </motion.div>

      <motion.div
        ref={setTextRef}
        className="text-section"
        initial={{ opacity: 0, x: 50 }}
        animate={textControls}
        transition={{ duration: 0.5 }}
      >
        <h2>{t("metalStructuresTitle")}</h2>
        <p>{t("metalStructuresDescription1")}</p>
        <ul className="styled-list">
          <li>{t("metalStructuresDescription2")}</li>
          <li>{t("metalStructuresDescription3")}</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default SliderWithText;
