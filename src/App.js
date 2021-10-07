/* eslint-disable no-unused-vars */
import React from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import { UserProvider, UserLoggedContext } from "./context/userContext";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/helpers/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <UserProvider>
          <UserLoggedContext.Consumer>
            {() => (
              <>
                <Route exact path="/">
                  <Login />
                </Route>

                <Route path="/dashboard">
                  <Dashboard />
                </Route>
              </>
            )}
          </UserLoggedContext.Consumer>
        </UserProvider>
        <Route component={NotFound}>
          <h3>Not Found</h3>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
