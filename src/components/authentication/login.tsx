import { Box, Button, TextField } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config/firebase-config";
import { setLogin } from "../../store/features/auth-slice";
import { useAppDispatch } from "../../store/store";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setError(false);
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      const userData = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userData.user;
      dispatch(setLogin());
      navigate("/home");
    } catch (error: any) {
      setError(true);
    }
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="email"
        onChange={(event) => handleChange(event)}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        name="password"
        onChange={(event) => handleChange(event)}
      />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
      {error && <span style={{ color: "red" }}>Ivalid email/password</span>}
    </Box>
  );
};

export default Login;
