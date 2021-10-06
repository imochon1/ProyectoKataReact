/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import {
  FormControl,
  InputLabel,
  Box,
  OutlinedInput,
  Button,
  Card,
  CardContent,
  Collapse,
  Alert,
} from "@mui/material/";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useHistory } from "react-router-dom";

import "./Login.css";
import { loginService } from "../services/Auth_services";
import { decodedJWT } from "../utils/utilities";
import { UserLoggedContext } from "../../context/userContext";
//import { validateEmail } from "../utils/utilities";
function Login() {
  const history = useHistory();

  const [usuario, setUsuario] = useState({});
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = React.useState(true);

  const { globalUser, setGlobalUser } = useContext(UserLoggedContext);

  const inputHandler = ({ target: { name, value } }) => {
    setUsuario({ ...usuario, [name]: value });
    //console.log("usuario", usuario);
  };

  const sendLoginInfo = () => {
    if (usuario.email === undefined || usuario.email.length === 0) {
      setErrorMessage("Campo de Email Vacio");
      setShowError(true);
      return;
    }
    if (usuario.password === undefined || usuario.password.length === 0) {
      setErrorMessage("Password Requerido");
      setShowError(true);
      return;
    }

    setUsuario(usuario);
    loginService(usuario)
      .then(({ token }) => {
        console.log("resultLogin", token);
        const payload = decodedJWT(token);
        console.log("Payload Login", payload);
        history.push("/dashboard");
        console.log("GlobalUser", globalUser);
        const { id, role, exp } = payload;

        setGlobalUser({
          id,
          role,
          expiration: exp,
        });
      })
      .catch((error) => {
        console.log("Error CATCH 2", error.data);
        setShowError(true);
        setErrorMessage(error.data.message);
      });
    console.log(usuario.email, usuario.password);
  };

  return (
    <div className="card-container">
      <Card className="card" elevation={4}>
        <CardContent>
          <h3>Bienvenid@</h3>
          <Box
            className="loginWrapper"
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl style={{ marginTop: 35 }}>
              <InputLabel htmlFor="component-outlined">
                <AlternateEmailOutlinedIcon />
              </InputLabel>
              <OutlinedInput
                id="component-outlined"
                name="email"
                onChange={inputHandler}
                label="Email"
              />
            </FormControl>
          </Box>
          <Box
            className="loginWrapper"
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl style={{ marginTop: 35 }}>
              <InputLabel htmlFor="component-outlined">
                <LockOutlinedIcon />
              </InputLabel>
              <OutlinedInput
                id="component-outlined"
                name="password"
                onChange={inputHandler}
                label="passwird"
              />
            </FormControl>
          </Box>
          <Box
            className="loginWrapper"
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <Button
              style={{ marginTop: 75 }}
              variant="contained"
              endIcon={<SendIcon />}
              onClick={() => sendLoginInfo()}
            >
              Send
            </Button>
          </Box>
        </CardContent>
        {showError && (
          <Collapse in={open}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {errorMessage}
            </Alert>
          </Collapse>
        )}
      </Card>
    </div>
  );
}

export default Login;
