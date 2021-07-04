import React from "react";
import styled from "styled-components";
import { StyledLayout } from "../styles";
import { AnimateSharedLayout } from "framer-motion";

//Reusable components
import Toggle from "./Toggle";
import { useScroll } from "./useScroll";

import { fade } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <StyledFaq
      ref={element}
      variants={fade}
      initial="hidden"
      animate={controls}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, iure.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente, reiciendis.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              dolore.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              illo!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
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
`;

export default FaqSection;
