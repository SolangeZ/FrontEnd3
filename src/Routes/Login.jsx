import React, { useState, useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const { handleLogin } = useContext(LoginContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    navigate("/home");
    console.log(values);
  };

  return (
    <Box component="form" className="login" onSubmit={handleSubmit}>
      <img
        src="./images/logoclinica.JPG"
        alt="Logo Dental clinic "
        style={{
          borderRadius: "50%",
        }}
      />
      <TextField
        name="email"
        size="small"
        type="email"
        label="Email *"
        placeholder="Ingrese su Correo"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <TextField
        name="password"
        size="small"
        type="password"
        label="Password *"
        placeholder="Ingrese su Contraseña"
        value={values.password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
      />
      <Button type="submit" size="small" variant="contained" from="form">
        Submit
      </Button>
    </Box>
  );
};

export default Login;
