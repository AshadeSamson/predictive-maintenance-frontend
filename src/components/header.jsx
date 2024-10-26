import React, { useState } from "react";
import {
  StyledHeader,
  StyledNav,
  LogoBox,
  MenuBox,
  StyledButton,
} from "../styles/header.styled.js";
import { Container } from "../styles/container.js";
import { NavLink } from "react-router-dom";
import { HamburgerButton } from "../styles/header.styled.js";

function Header() {
  const [isOpen, setIsOpen] = useState(() => false);

  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <LogoBox>
            <h1>
              <span>PMSF</span> WORKSHOP
            </h1>
          </LogoBox>
          <HamburgerButton onClick={toggleMenu}>&#9776;</HamburgerButton>
          <MenuBox isOpen={isOpen}>
            <NavLink to="/.">Home</NavLink>
            <NavLink to="/map">Customers</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/login">
              <StyledButton>Login</StyledButton>
            </NavLink>
          </MenuBox>
        </StyledNav>
      </Container>
    </StyledHeader>
  );
}

export default Header;
