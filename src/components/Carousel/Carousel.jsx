import React from "react";
import Slider from "react-slick";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Example code taken from GeeksForGeeks
// https://www.geeksforgeeks.org/how-to-create-a-responsive-carousel-in-react-js/

function Carousel({ children, slideCount = 1 }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideCount,
    slidesToScroll: 1,

    appendDots: (dots) => (
      <div>
        <ul
          style={{
            margin: "0px",
            padding: "0px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="full-width-carousel">
        <Slider {...settings}>{children}</Slider>
      </div>
    </>
  );
}

export default Carousel;
