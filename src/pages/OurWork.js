import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  sliderContainer,
  slider,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element1, controls1] = useScroll();

  return (
    <StyledWork
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <StyledMovie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="The Athlete" />
          </Hide>
        </Link>
      </StyledMovie>
      <StyledMovie
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <h2>The Racer</h2>
        <motion.div
          ref={element}
          variants={lineAnim}
          initial="hidden"
          animate={controls}
          className="line"
        ></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="The Racer" />
        </Link>
      </StyledMovie>
      <StyledMovie
        ref={element1}
        variants={fade}
        animate={controls1}
        initial="hidden"
      >
        <h2>Good Times</h2>
        <motion.div
          ref={element1}
          variants={lineAnim}
          initial="hidden"
          animate={controls1}
          className="line"
        ></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="Good Times" />
        </Link>
      </StyledMovie>
      <ScrollTop />
    </StyledWork>
  );
};

const StyledWork = styled(motion.section)`
  min-height: 100vh;
  margin-top: 10vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0;
  }
`;

const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    background: #23d997;
    height: 0.5rem;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  background: #8ee223;
  position: fixed;
  top: 10%;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #3ae;
`;

const Frame3 = styled(Frame1)`
  background: #31d;
`;

const Frame4 = styled(Frame1)`
  background: #e23;
`;

export default OurWork;
