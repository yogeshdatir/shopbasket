import React, { useContext, useEffect } from "react";
import {
  Bars,
  Nav,
  NavButton,
  NavButtonLink,
  NavMenu,
  NavLink,
  LogoContainer,
  NavButtonGroup,
} from "./NavBarElements";
// import LogoImg from "../../../assets/img/logo/logo_transparent.png";
import authContext from "../../../contexts/AuthContext";
import axiosInstance from "../../../actions/axiosInstance";
import { LOGOUT_SUCCESS } from "../../../actions/actionTypes";

interface Props {}

const NavBar = (props: Props) => {
  const { state, dispatch } = useContext(authContext);

  const fetchLogout = async () => {
    await axiosInstance
      .get("/dj-rest-auth/logout/")
      .then((res) => {
        dispatch({
          type: LOGOUT_SUCCESS,
        });
      })
      .catch((err) => {
        // add error handling dispatch here
        console.log(err);
      });
  };

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
        </NavMenu>
        <NavButtonGroup>
          {state.token ? (
            <NavButton onClick={fetchLogout}>Logout</NavButton>
          ) : (
            <>
              <NavLink to="/signup">Sign Up</NavLink>
              <NavButtonLink to="/signin">Sign In</NavButtonLink>
            </>
          )}
        </NavButtonGroup>
      </Nav>
    </>
  );
};

export default NavBar;
