import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "../../assets/Banner.svg";
import bannerMobile from "../../assets/bannerMobile.svg";

const HomeCarousel: React.FC = () => {
  return (
    <>
      <Carousel
        className="desktopCarousel"
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        <img src={banner} alt="banner1" />
        <img src={banner} alt="banner2" />
        <img src={banner} alt="banner3" />
      </Carousel>
      <Carousel
        className="MobileCarousel"
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        <img src={bannerMobile} alt="bannerMobile1" />
        <img src={bannerMobile} alt="bannerMobile2" />
        <img src={bannerMobile} alt="bannerMobile3" />
      </Carousel>
    </>
  );
};

export default HomeCarousel;
