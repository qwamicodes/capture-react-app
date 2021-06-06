import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

import { MovieState } from "../movieState";

const MovieDetail = () => {
  const url = useHistory().location.pathname;

  const [Movies, setMovies] = useState(MovieState);
  const [Movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = Movies.filter((movie) => movie.url === url);
    setMovie(currentMovie[0]);
  }, [Movies, url]);

  return (
    <>
      {Movie && (
        <StyledDetails
          variants={pageAnimation}
          exit="exit"
          initial="hidden"
          animate="show"
        >
          <StyledHeadline>
            <h2>{Movie.title}</h2>
            <img src={Movie.mainImg} alt={Movie.title} />
          </StyledHeadline>
          <StyledAwards>
            {Movie.awards.map((award) => (
              <Award title={award.title} description={award.description} />
            ))}
          </StyledAwards>
          <StyledImageDisplay>
            <img src={Movie.secondaryImg} alt={Movie.title} />
          </StyledImageDisplay>
        </StyledDetails>
      )}
    </>
  );
};

const StyledDetails = styled(motion.div)`
  margin-top: 10vh;
  color: white;
`;

const StyledHeadline = styled.div`
  min-height: 90vh;
  position: relative;
  padding-top: 20vh;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const StyledAwards = styled.div`
  display: flex;
  min-height: 80vh;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const StyledAward = styled.div`
  padding: 5rem;

  h3 {
    font-size: 2rem;
  }

  .line {
    height: 0.5rem;
    margin: 1rem 0;
    width: 50%;
    background: #23d997;
  }

  p {
    padding: 2rem 0;
  }
`;

const StyledImageDisplay = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};

export default MovieDetail;
