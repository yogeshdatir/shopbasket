import React, { useContext } from "react";
import { Route, Redirect } from "react-router";
import authContext from "../../../contexts/AuthContext";

const PrivateRoute = ({
  component: Component,
  exact,
  path,
}: {
  component: any;
  exact: any;
  path: any;
}) => {
  const { state } = useContext(authContext);
  return (
    <Route
      exact
      path={path}
      render={(props) => {
        if (state.isLoading) {
          // you can add spinner here
          return <h2>Loading...</h2>;
        } else if (!state.isAuthenticated) {
          return <Redirect to="/signIn" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
