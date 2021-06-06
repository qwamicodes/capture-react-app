import React from "react";
import styled from "styled-components";
import { StyledLayout } from "../styles";

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, iure.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What Products do you offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            reiciendis.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Different Payment Methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            dolore.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            illo!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledLayout)`
  display: block;

  span {
    display: block;
  }

  h2 {
    font-weight: lighter;
    padding-bottom: 2rem;
  }

  .faq-line {
    height: 0.2rem;
    width: 100%;
    background: #ccc;
    margin: 2rem 0;
  }

  .question {
    padding: 3rem 0;
    cursor: pointer;

    .answer {
      padding: 2rem 0;

      p {
        padding: 1rem 0;
      }
    }
  }
`;

export default FaqSection;
