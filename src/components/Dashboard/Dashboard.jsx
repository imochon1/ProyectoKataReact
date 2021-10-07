import React from "react";
import { NavBar } from "../Navbar/NavBar";
import { Switch, useRouteMatch } from "react-router-dom";
import Items from "../Items/Items";
// eslint-disable-next-line no-unused-vars
import Perfil from "../Perfil/Perfil";
import Usuarios from "../Usuarios/Usuarios";
import CreateArticle from "../CreateArticle/CreateArticle";
import CreateUser from "../CreateUser/CreateUser";
import PrivateRoute from "../helpers/PrivateRoute";

const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const { path, url } = useRouteMatch();

  return (
    <>
      <NavBar />
      <Switch>
        <PrivateRoute exact component={Items} path={`${path}/items`} />

        <PrivateRoute exact component={Usuarios} path={`${path}/usuarios`} />

        <PrivateRoute
          exact
          component={CreateArticle}
          path={`${path}/crear_artiulo`}
        />
        <PrivateRoute
          exact
          component={CreateUser}
          path={`${path}/crear_usuario`}
        />
      </Switch>
    </>
  );
};

export default Dashboard;
