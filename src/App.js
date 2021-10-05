import React from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/dashboard" component={Dashboard} />

        <Route>
          <h3>Not Found</h3>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
