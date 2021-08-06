import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const isAuthenticated = () => {
  const token = localStorage.getItem("password");
  try {
    if (token) {
      return true;
    }
    else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute