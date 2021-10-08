import React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

function CreateUser() {
  const ariaLabel = { "aria-label": "description" };
  return (
    <div style={{ textAlign: "center", marginTop: 25, marginBottom: 25 }}>
      Hola Admin! Crear Usuario
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
        style={{ marginTop: 75 }}
      >
        <Input placeholder="Ingresar Email" inputProps={ariaLabel} />
        <Input placeholder="PassWord" inputProps={ariaLabel} />
        <Button variant="contained" style={{ alignItems: "center" }}>
          Crear Usuario
        </Button>
      </Box>
    </div>
  );
}

export default CreateUser;
