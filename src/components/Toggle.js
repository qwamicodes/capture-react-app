import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <StyledToggle
      layout
      className="question"
      onClick={() => setToggle(!toggle)}
    >
      <motion.h4 layout> {title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </StyledToggle>
  );
};

const StyledToggle = styled(motion.div)`
  cursor: pointer;

  &.question {
    padding: 3rem 0;

    .answer {
      padding: 2rem 0;

      p {
        padding: 1rem 0;
      }
    }
  }
`;

export default Toggle;
