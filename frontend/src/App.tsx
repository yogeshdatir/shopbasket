import React from "react";
import "./App.css";
import NavBar from "./components/common/Navbar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInView from "./components/common/SignIn/SignInView";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/signIn">
          <SignInView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
