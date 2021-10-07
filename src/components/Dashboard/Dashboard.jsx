import React from "react";
import { NavBar } from "../Navbar/NavBar";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Items from "../Items/Items";
// eslint-disable-next-line no-unused-vars
import Perfil from "../Perfil/Perfil";
import Usuarios from "../Usuarios/Usuarios";
import CreateArticle from "../CreateArticle/CreateArticle";
import CreateUser from "../CreateUser/CreateUser";

const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const { path, url } = useRouteMatch();

  return (
    <>
      <NavBar />
      <Switch>
        <Route path={`${path}/items`} component={Items} />
        <Route path={`${path}/usuarios`} component={Usuarios} />
        <Route path={`${path}/crear_articulo`} component={CreateArticle} />
        <Route path={`${path}/crear_usuario`} component={CreateUser} />
      </Switch>
    </>
  );
};

export default Dashboard;
