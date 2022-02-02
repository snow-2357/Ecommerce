import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { mobile } from "../responsive";

function ItemSlider() {
  let settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <TitleLeft>Best Laptops in the Market</TitleLeft>
        <img src="./slide1.jpg" alt="" />
      </Wrap>
      <Wrap>
        <TitleRight>13% offer on IPhone 12-Pro-Max</TitleRight>
        <img src="./slide2.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="./slide3.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="./slide4.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="./slide5.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
}

export default ItemSlider;

const Carousel = styled(Slider)`
  overflow: hidden;
  padding: 0px 0%;
  position: relative;
  margin-top: 0px;
  .slick-list {
    overflow: hidden;
  }

  ${mobile({
    padding: "0px 0px",
  })}
`;
const Wrap = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    transition-duration: 250ms;
    ${mobile({
      height: "150px",
    })}
  }
`;
const TitleLeft = styled.h1`
  color: white;
  z-index: 10;
  position: absolute;
  bottom: 10%;
  left: 5%;
`;
const TitleRight = styled.h1`
  color: white;
  z-index: 10;
  position: absolute;
  bottom: 10%;
  right: 5%;
`;