import React from "react";
// import styled from "styled-components";
import { motion } from "framer-motion";

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
        <motion.div className="about__description--title">
          <StyledHide>
            <motion.h2>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>
              you <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>true.</motion.h2>
          </StyledHide>
        </motion.div>
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
