import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Usuarios from "../Usuarios/Usuarios";
import { itemService } from "../services/Auth_services";

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/dashboard">
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

          <Link to="/dashboard/items">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              onClick={() => itemService()}
            >
              Items
            </Typography>
          </Link>

          <Link to="/dashboard/usuarios">
            <Button color="inherit">Usuarios</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
