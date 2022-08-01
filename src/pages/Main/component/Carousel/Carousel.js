import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './slick.css';
import './slick-theme.css';
import S from './Styled.Carousel';

const Carousel = () => {
  const [mainCarouselData, setMainCarouselData] = useState([]);
  useEffect(() => {
    fetch('/data/MainCarouselData.json')
      .then(res => res.json())
      .then(result => {
        setMainCarouselData(result);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1900,
  };

  return (
    <S.Slick>
      <Slider {...settings}>
        <S.CarouselData alt="carousel" src={mainCarouselData[3]?.src} />
        <S.CarouselData alt="carousel" src={mainCarouselData[0]?.src} />
        <S.CarouselData alt="carousel" src={mainCarouselData[4]?.src} />
        <S.CarouselData alt="carousel" src={mainCarouselData[2]?.src} />
        <S.CarouselData alt="carousel" src={mainCarouselData[1]?.src} />
        <S.CarouselData alt="carousel" src={mainCarouselData[5]?.src} />
      </Slider>
    </S.Slick>
  );
};

export default Carousel;
