import React, { useContext } from "react";
import { Route, Redirect } from "react-router";
import authContext from "../../../contexts/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { state } = useContext(authContext);
  return (
    <Route
      {...rest}
      render={(props: any) => {
        if (state.isLoading) {
          // you can add spinner here
          return <h2>Loading...</h2>;
        } else if (!state.token) {
          return (
            <Redirect
              to={{ pathname: "/signIn", state: { from: props.location } }}
            />
          );
        } else {
          return <Component {...props}>{props.children}</Component>;
        }
      }}
    />
  );
};

export default PrivateRoute;
