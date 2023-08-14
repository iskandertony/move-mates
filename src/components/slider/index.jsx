import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MySlider = () => {
  const settings = {
    dots: true, // Отображение индикаторов слайда (точек)
    infinite: true, // Бесконечное пролистывание
    speed: 500, // Скорость переключения слайдов
    slidesToShow: 1, // Количество слайдов для показа
    slidesToScroll: 1, // Количество слайдов для прокрутки
    swipeToSlide: true, // Позволяет прокручивать слайдер с помощью свайпа
  };

  return (
    <Slider {...settings} >
      <div>
        <h3>Slide 1</h3>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
    </Slider>
  );
};

export default MySlider;
