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
import "./Login.css";
function Login() {
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState("");
  // eslint-disable-next-line no-unused-vars

  const [usuario, setUsuario] = useState({});
  const [password, setPassword] = useState("");
  const handleEmail = ({ target }) => {
    setEmail(target.value);
    console.log("handlechange", email);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
    console.log("handlechange", password);
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
          <InputLabel htmlFor="component-outlined">Name</InputLabel>
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
          <InputLabel htmlFor="component-outlined">Name</InputLabel>
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
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Box>
    </>
  );
}

export default Login;
