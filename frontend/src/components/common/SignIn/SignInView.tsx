import React, { useState } from "react";
import {
  Box,
  Container,
  ContentBox,
  ForgotPasswordLink,
  FormLabel,
  GoogleSignIn,
  Input,
  Label,
  LoginBox,
  NormalSignInContainer,
  RegisterLink,
  SeparatorText,
  SignInSubmit,
  SocialSignInContainer,
} from "./SignInViewElements";
import { CSSTransition } from "react-transition-group";
import GoogleSingInButton from "../../../assets/img/google_signin_buttons/web/vector/btn_google_light_normal_ios.svg";

interface Props {}

const SignInView = (props: Props) => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  return (
    <Container>
      <Box>
        <LoginBox>
          <NormalSignInContainer>
            <FormLabel>Login</FormLabel>
            <Label>Username or Email</Label>
            <Input type="text" />
            <Label>Password</Label>
            <Input type="password" />
            <CSSTransition
              in={isRegister}
              timeout={300}
              classNames="registration"
              unmountOnExit
            >
              <NormalSignInContainer>
                <Label>Password</Label>
                <Input type="password" />
                <Label>Password</Label>
                <Input type="password" />
              </NormalSignInContainer>
            </CSSTransition>
            <ForgotPasswordLink to="/login">
              Forgot password?
            </ForgotPasswordLink>
            <SignInSubmit>Sign In</SignInSubmit>
          </NormalSignInContainer>
          <SeparatorText>or</SeparatorText>
          <SocialSignInContainer>
            <GoogleSignIn to="/googlesignup">
              <img src={GoogleSingInButton} alt="google sign in" />
              <span></span>
            </GoogleSignIn>
            <div>
              <span>New User?</span>
              <span
                onClick={() =>
                  setIsRegister((prevState: boolean) => !prevState)
                }
              >
                Create an Account
              </span>
            </div>
          </SocialSignInContainer>
        </LoginBox>
        <ContentBox></ContentBox>
      </Box>
    </Container>
  );
};

export default SignInView;
