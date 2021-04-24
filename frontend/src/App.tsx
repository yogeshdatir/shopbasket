import React, { useReducer } from "react";
import "./App.css";
import NavBar from "./components/common/Navbar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInView from "./components/SignIn/SignInView";
import authContext from "./contexts/AuthContext";
import authReducer from "./reducers/authReducer";
import PrivateRoute from "./components/common/PrivateRoute/PrivateRoute";
import Home from "./components/common/Home/Home";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

function App() {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // const { token, isAuthenticated, isLoading, user } = state;

  return (
    <authContext.Provider value={{ state, dispatch }}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/signIn" exact component={SignInView} />
          <PrivateRoute
            path="/home"
            exact
            component={Home}
          />
        </Switch>
      </Router>
    </authContext.Provider>
  );
}

export default App;
