/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserLoggedContext } from "../../context/userContext";
// eslint-disable-next-line no-unused-vars
const PrivateRoute = ({ component: Component }) => {
  // eslint-disable-next-line no-unused-vars
  const { globalUser, setGlobalUser } = useContext(UserLoggedContext);

  return (
    <Route
      render={(props) => {
        if (Object.keys(globalUser).length === 0) {
          console.log("GLobal User Vacio");
          return <Redirect to={{ pathname: "/" }} />;
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
