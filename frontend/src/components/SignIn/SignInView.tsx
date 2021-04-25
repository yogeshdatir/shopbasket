import React, { useContext, useState } from "react";
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
  RegisterLink,
  SeparatorText,
  SignInSubmit,
  SocialSignInContainer,
} from "./SignInViewElements";
import GoogleLogin from "react-google-login";
import authContext from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import axiosInstance from "../../actions/axiosInstance";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "../../actions/actionTypes";
import { Redirect } from "react-router-dom";
import history from '../common/history'

interface Props {}

const SignInView = (props: Props) => {
  const [formInput, setFormInput] = useState({
    email: "",
    username: "",
    password: "",
    password1: "",
    password2: "",
  });

  const { email, username, password, password1, password2 } = formInput;

  const [isRegister, setIsRegister] = useState<boolean>(false);

  const handleInput = (event: any) => {
    const input = event.target.value;
    const stateName = event.target.name;
    setFormInput({ ...formInput, [stateName]: input });
  };

  const { state, dispatch } = useContext(authContext);

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    if (!isRegister) {
      // Headers
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({ email, password });

      axiosInstance
        .post("/dj-rest-auth/login/", body, config)
        .then((res) => {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
          });
          history.push('/home');;
        })
        .catch((err) => {
          // add error handling dispatch here
          toast.error(err.response.data["non_field_errors"][0], {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({ type: LOGIN_FAIL });
        });
    }
  };

  // if already logged in redirect to dashboard
  if (state.isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <Box>
        <LoginBox>
          <NormalSignInContainer>
            <FormLabel>{isRegister ? "Register" : "Login"}</FormLabel>
            {isRegister && (
              <>
                <Label>Username</Label>
                <Input
                  type="text"
                  name="username"
                  onChange={handleInput}
                  value={username}
                />
              </>
            )}
            <Label>Email</Label>
            <Input
              type="text"
              name="email"
              onChange={handleInput}
              value={email}
            />
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              onChange={handleInput}
              value={password}
            />
            {isRegister && (
              <>
                <Label>Confirm Password</Label>
                <Input
                  type="password"
                  name="password2"
                  onChange={handleInput}
                  value={password2}
                />
              </>
            )}
            <ForgotPasswordLink to="/login">
              Forgot password?
            </ForgotPasswordLink>
            <SignInSubmit onClick={handleOnSubmit}>Sign In</SignInSubmit>
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
                buttonText="Login with Google"
                onSuccess={(res) => console.log(res)}
                onFailure={(res) => console.log(res)}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
            </div>
            <div>
              <span>New User?</span>
              <RegisterLink
                onClick={() =>
                  setIsRegister((prevState: boolean) => !prevState)
                }
              >
                Create an Account
              </RegisterLink>
            </div>
          </SocialSignInContainer>
        </LoginBox>
        <ContentBox></ContentBox>
      </Box>
    </Container>
  );
};

export default SignInView;
