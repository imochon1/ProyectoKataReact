/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Box,
  OutlinedInput,
  Button,
} from "@mui/material/";
import SendIcon from "@mui/icons-material/Send";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./Login.css";
function Login() {
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-unused-vars

  const [usuario, setUsuario] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = ({ target }) => {
    setEmail(target.value);
    console.log("handlechange", email);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
    console.log("handlechange", password);
  };

  const sendLoginInfo = () => {
    console.log("email:", email, "password:", password);
  };

  return (
    <>
      <Box
        className="loginWrapper"
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl>
          <InputLabel htmlFor="component-outlined">
            <AlternateEmailOutlinedIcon />
          </InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={email}
            onChange={handleEmail}
            label="Name"
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
        <FormControl>
          <InputLabel htmlFor="component-outlined">
            <LockOutlinedIcon />
          </InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={password}
            onChange={handlePassword}
            label="Name"
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
          variant="contained"
          endIcon={<SendIcon />}
          onClick={sendLoginInfo}
        >
          Send
        </Button>
      </Box>
    </>
  );
}

export default Login;
