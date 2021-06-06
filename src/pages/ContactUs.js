import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <h2>Contact Us</h2>
    </StyledContact>
  );
};

const StyledContact = styled(motion.section)`
  color: white;
  margin-top: 10vh;
`;

export default ContactUs;
