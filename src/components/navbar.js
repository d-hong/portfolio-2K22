import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavBarConatiner = styled.nav`
  width: 300px;
  border: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const NavOption = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function Navbar() {
  return (
    <NavBarConatiner>
      <NavOption to="/">Home</NavOption>
      <NavOption to="/about">About</NavOption>
      <NavOption to="/projects">Projects</NavOption>
      <NavOption to="/experience">Experience</NavOption>
    </NavBarConatiner>
  );
}
