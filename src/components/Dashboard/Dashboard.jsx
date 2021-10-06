import React from "react";
import { NavBar } from "../Navbar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Items from "../Items/Items";
// eslint-disable-next-line no-unused-vars
import Perfil from "../Perfil/Perfil";
import Usuarios from "../Usuarios/Usuarios";

const Dashboard = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/dashboard/items" component={Items} />
          <Route path="/dashboard/usuarios" component={Usuarios} />
        </Switch>
      </Router>
      <h2>Dashboard</h2>
    </>
  );
};

export default Dashboard;
