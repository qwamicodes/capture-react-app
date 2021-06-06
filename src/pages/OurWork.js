import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWork = () => {
  return (
    <StyledWork
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <StyledMovie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="The Athlete" />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="The Racer" />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="Good Times" />
        </Link>
      </StyledMovie>
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

const StyledMovie = styled.div`
  padding-bottom: 10rem;

  .line {
    background: #ccc;
    height: 0.5rem;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
