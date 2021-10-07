import React, { useContext, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

// eslint-disable-next-line no-unused-vars
import Usuarios from "../Usuarios/Usuarios";
import { itemService } from "../services/Auth_services";
import { UserLoggedContext } from "../../context/userContext";

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const { globalUser, setGlobalUser } = useContext(UserLoggedContext);
  console.log("global user", globalUser);

  const { path } = useRouteMatch();
  const history = useHistory();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setShowMenu(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setShowMenu(false);
  };

  const logout = () => {
    setGlobalUser({});
    history.push("/");
  };

  const renderMenu = (
    <Menu
      id="menu-appbar"
      keepMounted
      anchorEl={anchorEl}
      open={showMenu}
      onClose={handleMenuClose}
    >
      <Link
        to="dashboard/mi-perfil"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem>Mi Perfil</MenuItem>
      </Link>

      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <MenuItem onClick={logout}>Cerrar sesión</MenuItem>
      </Link>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to={`${path}`}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Link>

          <Link to={`${path}/items`}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              onClick={() => itemService()}
            >
              Items
            </Typography>
          </Link>

          {globalUser.role === "ADMIN" && (
            <>
              <Link to="/dashboard/usuarios">
                <Button color="inherit">Usuarios</Button>
              </Link>

              <Link to="/dashboard/Crear_usuario">
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                  Crear Usuario
                </Typography>
              </Link>
            </>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="Current USer"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
              onClick={handleMenuOpen}
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};
