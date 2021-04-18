import React from "react";
import {
  Bars,
  Nav,
  NavButton,
  NavButtonLink,
  NavMenu,
  NavLink,
  LogoContainer,
} from "./NavBarElements";
// import LogoImg from "../../../assets/img/logo/logo_transparent.png";

interface Props {}

const NavBar = (props: Props) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <LogoContainer>
            <h1 className={"logo-text"}>ShopBasket</h1>
            <h6 className={"logo-subtitle"}>Buy with Confidence</h6>
          </LogoContainer>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </NavMenu>
        <NavButton>
          <NavButtonLink to="/signin">Sign In</NavButtonLink>
        </NavButton>
      </Nav>
    </>
  );
};

export default NavBar;
