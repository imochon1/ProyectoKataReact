import React from "react";
import { NavBar } from "../Navbar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Items from "../Items/Items";

const Dashboard = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/dashboard/items" component={Items} />
        </Switch>
      </Router>
    </>
  );
};

export default Dashboard;
