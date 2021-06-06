import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
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
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
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

export default Nav;
