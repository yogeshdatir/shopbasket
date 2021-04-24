import React, { useState } from "react";
import {
  Box,
  Container,
  ContentBox,
  ForgotPasswordLink,
  FormLabel,
  Input,
  Label,
  LoginBox,
  NormalSignInContainer,
  SeparatorText,
  SignInSubmit,
  SocialSignInContainer,
} from "./SignInViewElements";
import { CSSTransition } from "react-transition-group";
import GoogleLogin from "react-google-login";

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
            <div
              style={{
                margin: "1.5rem 0 1rem 0",
              }}
            >
              <GoogleLogin
                clientId="132753756630-bhdmqvep36dkc04fevqpuo4d5ni1kipg.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={(res) => console.log(res)}
                onFailure={(res) => console.log(res)}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
            </div>
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
