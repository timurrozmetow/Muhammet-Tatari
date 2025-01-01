import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderWithText11.css"; // Подключите CSS для оформления

const SliderWithText11 = () => {
  const slides = [
    { id: 1, image: "1/s1.png", alt: "Slide 1" },
    { id: 2, image: "1/s2.png", alt: "Slide 2" },
    { id: 3, image: "1/s3.png", alt: "Slide 3" },
    { id: 4, image: "1/s4.png", alt: "Slide 4" },
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

export default SliderWithText11;
