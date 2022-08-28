import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formData);
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
        label="Name"
        variant="outlined"
        name="name"
        onChange={(event) => handleChange(event)}
      />
      <TextField
        id="outlined-basic"
        type="number"
        label="age"
        variant="outlined"
        name="age"
        onChange={(event) => handleChange(event)}
      />
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
      <Button variant="contained" onClick={handleSubmit}>
        Login
      </Button>
    </Box>
  );
};

export default Signup;
