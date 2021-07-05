import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          {pathname === "/" ? (
            <Line
              initial={{ width: "0%" }}
              animate={{ width: "40%" }}
              transition={{ duration: 0.75 }}
            />
          ) : null}
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          {pathname === "/work" ? (
            <Line
              initial={{ width: "0%" }}
              animate={{ width: "40%" }}
              transition={{ duration: 0.75 }}
            />
          ) : null}
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          {pathname === "/contact" ? (
            <Line
              initial={{ width: "0%" }}
              animate={{ width: "40%" }}
              transition={{ duration: 0.75 }}
            />
          ) : null}
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  background: #282828;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 1rem 10rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  #logo {
    font-family: "Lobster", cursive;
    font-weight: lighter;
    font-size: 1.5rem;
  }

  a {
    color: #fff;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    li {
      position: relative;
      padding: 0 5rem;
    }
  }
`;

const Line = styled(motion.div)`
  position: absolute;
  background: #23d997;
  height: 0.3rem;
  width: 40%;
  bottom: -7px;
  left: 50%;
  transform: translate(-50%, 100%);
`;

export default Nav;
