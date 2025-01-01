import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderWithText.css"; // Подключите CSS для оформления

const SliderWithText = () => {
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
        <h2>About:</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim hic
          quisquam, quod corrupti nulla blanditiis ad. Cus consequuntur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim hic
          quisquam, quod corrupti nulla blanditiis ad. Cus consequuntur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim hic
          quisquam, quod corrupti nulla blanditiis ad. Cus consequuntur.
        </p>
      </div>
    </div>
  );
};

export default SliderWithText;