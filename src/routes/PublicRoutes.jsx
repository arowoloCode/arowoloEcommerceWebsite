import React from "react";
import { Redirect, Route } from "react-router";
import { getAccessToken } from "../utils";

const PublicRoutes = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        getAccessToken() && restricted ? (
          <Redirect to='/' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoutes;
