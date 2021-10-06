import React from "react";
import { NavBar } from "../Navbar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Items from "../Items/Items";
// eslint-disable-next-line no-unused-vars
import Perfil from "../Perfil/Perfil";
import Usuarios from "../Usuarios/Usuarios";
import CreateArticle from "../CreateArticle/CreateArticle";

const Dashboard = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/dashboard/items" component={Items} />
          <Route path="/dashboard/usuarios" component={Usuarios} />
          <Route path="/dashboard/crear_articulo" component={CreateArticle} />
        </Switch>
      </Router>
    </>
  );
};

export default Dashboard;
