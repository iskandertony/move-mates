import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss"
const MySlider = (props) => {
  const { child1, child1_sub, child2, child3, className, img } = props;
  const settings = {
    dots: true, // Отображение индикаторов слайда (точек)
    infinite: true, // Бесконечное пролистывание
    speed: 500, // Скорость переключения слайдов
    slidesToShow: 1, // Количество слайдов для показа
    slidesToScroll: 1, // Количество слайдов для прокрутки
    swipeToSlide: true, // Позволяет прокручивать слайдер с помощью свайпа
  };

  return (
    <Slider {...settings} className={`slider ${className} `}>
      <div className={"child_1"}>
        <div>
          <img src={img} alt="" />
        </div>
        <div className={"text"}>{child1}</div>
        <div className={"text"}>{child1_sub}</div>
      </div>
      <div className={"child_2"}>
        <h3 className={"text"}>{child2}</h3>
      </div>

      {child3 && (
        <div className={"child_3"}>
          <h3>{child3}</h3>
        </div>
      )}
    </Slider>
  );
};

export default MySlider;
