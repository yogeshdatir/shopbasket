import React, { useEffect, useReducer } from "react";
import "./App.css";
import NavBar from "./components/common/Navbar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInView from "./components/SignIn/SignInView";
import authContext from "./contexts/AuthContext";
import authReducer from "./reducers/authReducer";
import PrivateRoute from "./components/common/PrivateRoute/PrivateRoute";
import Home from "./components/common/Home/Home";
import { AUTH_ERROR, USER_LOADED, USER_LOADING } from "./actions/actionTypes";
import axiosInstance from "./actions/axiosInstance";
import getCookie from "./actions/getCookie";

function App() {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    isLoading: false,
    user: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  // const { token, isAuthenticated, isLoading, user } = state;

  useEffect(() => {
    // CHECK TOKEN AND LOAD USER
    const loadUser = async (dispatch: any) => {
      // User Loading
      dispatch({ type: USER_LOADING });

      // Get token from state
      const token = state.token;
      const csrftoken = getCookie("csrftoken");

      const config: any = {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken,
        },
      };

      //  If token, add to headers config
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      console.log(config, token);

      await axiosInstance
        .get("/dj-rest-auth/user/", config)
        .then((res) => {
          dispatch({
            type: USER_LOADED,
            payload: res,
          });
        })
        .catch((err: any) => {
          // add error handling dispatch here

          dispatch({ type: AUTH_ERROR });
        });
    };
    loadUser(dispatch);
  }, [state.token]);

  return (
    <authContext.Provider value={{ state, dispatch }}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/signIn" exact component={SignInView} />
          <PrivateRoute path="/home" exact component={Home} />
          <PrivateRoute path="/about" exact component={Home} />
        </Switch>
      </Router>
    </authContext.Provider>
  );
}

export default App;
