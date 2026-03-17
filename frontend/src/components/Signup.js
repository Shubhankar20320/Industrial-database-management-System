import React, { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography, Paper, MenuItem } from "@mui/material";

export default function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "user"
  });

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:8080/api/signup", form);
      alert("Signup successful!");
      window.location.href = "/";
    }catch (error)  {
  console.log("FULL ERROR:", error);
  console.log("RESPONSE:", error.response);
  alert(error.response?.data || error.message || "Signup failed");
}
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={6} sx={{ padding: 3, marginTop: 8 }}>
        <Typography variant="h6" align="center">
          Create Account
        </Typography>

        <TextField
          fullWidth size="small"
          label="Email"
          margin="dense"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <TextField
          fullWidth size="small"
          type="password"
          label="Password"
          margin="dense"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />

        <TextField
          select fullWidth size="small"
          label="Role"
          margin="dense"
          value={form.role}
          onChange={e => setForm({ ...form, role: e.target.value })}
        >
          <MenuItem value="user">Employee</MenuItem>
          <MenuItem value="manager">Manager</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </TextField>

        <Button
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ marginTop: 2 }}
          onClick={handleSignup}
        >
          Signup
        </Button>
      </Paper>
    </Container>
  );
}