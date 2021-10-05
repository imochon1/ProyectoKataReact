/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Box,
  OutlinedInput,
  Button,
  Card,
  CardContent,
} from "@mui/material/";
import SendIcon from "@mui/icons-material/Send";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./Login.css";
//import { validateEmail } from "../utils/utilities";
function Login() {
  const [usuario, setUsuario] = useState({});
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const inputHandler = ({ target: { name, value } }) => {
    setUsuario({ ...usuario, [name]: value });
    console.log("usuario", usuario);
  };

  const sendLoginInfo = () => {
    if (usuario.email === undefined || usuario.email.length === 0) {
      setErrorMessage("Campo de Email Vacio");
      alert(errorMessage);
      setShowError(true);
      return;
    }
    if (usuario.password === undefined || usuario.password.length === 0) {
      setErrorMessage("Password Requerido");
      alert(errorMessage);
      setShowError(true);
      return;
    }

    setUsuario(usuario);
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
      </Card>
    </div>
  );
}

export default Login;
