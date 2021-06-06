import React from "react";
import styled from "styled-components";
import {
  StyledLayout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../styles";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <StyledLayout>
      <StyledDescription>
        <div className="about__description--title">
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              you <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true.</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any photography or videography that you have. We have
          professionals with amazing skills to help you achieve it
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="A guy with a camera" />
      </StyledImage>
    </StyledLayout>
  );
};

//Our styled components styles

export default AboutSection;
