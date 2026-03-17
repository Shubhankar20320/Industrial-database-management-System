import React, { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/login", {
        email,
        password
      });

      localStorage.setItem("role", res.data.role);
      window.location.href = "/dashboard";

    } catch (error) {
      alert("Invalid email or password");
      console.error(error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={6} sx={{ padding: 3, marginTop: 8 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Industrial Data Login
        </Typography>

        <TextField
          fullWidth size="small"
          label="Email"
          margin="dense"
          onChange={e => setEmail(e.target.value)}
        />

        <TextField
          fullWidth size="small"
          type="password"
          label="Password"
          margin="dense"
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ marginTop: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Paper>
    </Container>
  );
}