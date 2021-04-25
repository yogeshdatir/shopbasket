import styled from "@emotion/styled";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #69b4e1;
  background-image: linear-gradient(320deg, #69b4e1 0%, #acd5ce 100%);

  padding: 50px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  transition: all 400ms;

  /* This fires as soon as the element enters the DOM */
  .registration-enter {
    opacity: 0;
  }
  /* This is where we can add the transition*/
  .registration-enter-active {
    opacity: 1;
    transition: all 400ms;
  }
  /* This fires as soon as the this.state.showList is false */
  .registration-exit {
    opacity: 1;
  }
  /* fires as element leaves the DOM*/
  .registration-exit-active {
    opacity: 0;
    transition: all 400ms;
  }
`;

export const Box = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.13);
  height: 80%;
  width: 60vw;
  display: flex;
  transition: all 400ms;
`;

export const LoginBox = styled.div`
  width: 45%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentBox = styled.div`
  width: 55%;
  height: 100%;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
`;

export const NormalSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const FormLabel = styled.p`
  font-weight: bold;
  margin: 2rem 0 0.7rem 0;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 10px 15px;
  border: 0.5px solid #000;
  border-radius: 20px;
  outline: none;
  text-align: center;
`;

export const Label = styled.label`
  font-size: 0.8em;
  padding: 1.3rem 0 0.4rem 0;
`;

export const ForgotPasswordLink = styled(Link)`
  font-size: 0.8em;
  margin: 1rem 0 0.4rem 0;
  color: #02a8e7;
  text-decoration: none;
`;

export const SignInSubmit = styled.button`
  background: transparent;
  border: none;
  margin: 1.2rem 0 0.8rem 0;
  outline: none;
  cursor: pointer;
  color: #02a8e7;
  font-size: 1em;
  font-weight: 550;
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 2px solid #02a8e7;
`;

export const SocialSignInContainer = styled.div`
  background: #f4fbfd;
  height: 30%;
  width: 100%;
  text-align: center;
  padding-bottom: 20px;

  span {
    font-size: 0.8em;
  }
`;

export const SeparatorText = styled.span`
  font-size: 1rem;
  transform: translateY(0.5rem);
  width: 100%;
  text-align: center;
  z-index: 3;

  :before {
    content: "";
    width: 20%;
    border-bottom: 0.5px solid grey;
    position: absolute;
    left: 20%;
    top: 50%;
    z-index: 1;
  }

  :after {
    content: "";
    width: 20%;
    border-bottom: 0.5px solid grey;
    position: absolute;
    right: 20%;
    top: 50%;
    z-index: 1;
  }
`;

export const GoogleSignIn = styled(Link)`
  img {
    margin: 1.5rem 0 0.5rem 0;
  }
`;

export const RegisterLink = styled.span`
  margin: 0 0.5rem;
  font-size: 0.8em;
  font-weight: 550;
  color: #02a8e7;
  padding-bottom: 2px;
  border-bottom: 2px solid #02a8e7;
  cursor: pointer;
  transition: all 300ms;

  :hover {
    font-size: 1rem;
  }
`;
