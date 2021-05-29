import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "../../assets/Banner.svg";

const HomeCarousel: React.FC = () => {
  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      showStatus={false}
    >
      <img src={banner} alt="banner1" />
      <img src={banner} alt="banner2" />
      <img src={banner} alt="banner3" />
    </Carousel>
  );
};

export default HomeCarousel;
