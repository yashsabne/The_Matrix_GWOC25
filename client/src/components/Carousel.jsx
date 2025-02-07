import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src="https://peterdraw.studio/wp-content/uploads/2022/01/ProVice-Consulting-Agency-Website-Hero-Section.png" alt="Banner 1" />
        </div>
        <div className="carousel-slide">
          <img src="https://wp.klientboost.com/wp-content/uploads/2021/12/image33-1.png" alt="Banner 2" />
        </div>
        <div className="carousel-slide">
          <img src="https://website-assets.commoninja.com/distribution/1688029445709_RvI0KEYzYBy2iMc2Eb6HR60wfxCcUCWMVIv3obxAAuFe3jTD47ohcXi-VXkfT_ipqLofQbvyUq3OJ7dJ9VjkmOayfxbCXLDFxzyS3nsvoTO0ELhwaJe3NSLO6G2EuAwEiTmx1SNDC5L7P3Jo65WBm54.png" alt="Banner 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
