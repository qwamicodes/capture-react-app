import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import { StyledLayout } from "../styles";

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send us a message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Come see us at our office</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Like and follow our social media</h2>
          </Social>
        </Hide>
      </Title>
    </StyledContact>
  );
};

const StyledContact = styled(StyledLayout)`
  color: #353535;
  display: block;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 1.5rem 0;

  h2 {
    margin-left: 2%;
  }
`;

const Circle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #353535;
`;
export default ContactUs;
