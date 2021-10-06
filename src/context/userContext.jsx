// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";

const UserLoggedContext = createContext();

const UserProvider = (props) => {
  const [globalUser, setglobalUser] = useState({});

  return (
    <UserLoggedContext.Provider
      value={{ globalUser, setglobalUser }}
      {...props}
    />
  );
};

export { UserLoggedContext, UserProvider };
