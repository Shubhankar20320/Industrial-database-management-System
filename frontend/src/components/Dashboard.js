import React, { useState } from "react";
import { Container, Typography, Paper, Button, TextField, MenuItem, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const parameters = [
  { value: "temperature", label: "Temperature", unit: "°C" },
  { value: "pressure", label: "Pressure", unit: "bar" },
  { value: "speed", label: "Speed", unit: "rpm" },
];

export default function Dashboard() {
  const role = localStorage.getItem("role");

  const [coilData, setCoilData] = useState([
    { id: 1, radius: 10, parameter: "Temperature=200°C" },
    { id: 2, radius: 15, parameter: "Pressure=50bar" }
  ]);

  const [newRadius, setNewRadius] = useState("");
  const [paramType, setParamType] = useState(parameters[0].value);
  const [paramValue, setParamValue] = useState("");

  const addData = () => {
    if (!newRadius || isNaN(newRadius)) {
      alert("Please enter a valid radius.");
      return;
    }
    if (!paramValue) {
      alert("Please enter a parameter value.");
      return;
    }
    const selectedParam = parameters.find(p => p.value === paramType);
    const parameterString = `${selectedParam.label}=${paramValue}${selectedParam.unit}`;

    const newId = coilData.length > 0 ? coilData[coilData.length - 1].id + 1 : 1;
    setCoilData([
      ...coilData,
      { id: newId, radius: Number(newRadius), parameter: parameterString }
    ]);

    // Clear inputs
    setNewRadius("");
    setParamValue("");
  };

  const deleteData = (id) => {
    setCoilData(coilData.filter((row) => row.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "radius", headerName: "Coil Radius", width: 150 },
    { field: "parameter", headerName: "Parameter", width: 200 },
    ...(role === "manager"
      ? [{
          field: "actions",
          headerName: "Actions",
          width: 150,
          renderCell: (params) => (
            <Button
              variant="outlined"
              color="error"
              onClick={() => deleteData(params.row.id)}
            >
              Delete
            </Button>
          )
        }]
      : [])
  ];

  return (
    <Container maxWidth="md">
      <Paper elevation={6} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard – {role}
        </Typography>

        {role === "user" && (
          <Box sx={{ display: "flex", gap: 2, marginBottom: 2, alignItems: "center" }}>
            <TextField
              label="Radius"
              size="small"
              type="number"
              value={newRadius}
              onChange={(e) => setNewRadius(e.target.value)}
              helperText="In cm"
            />
            <TextField
              select
              label="Parameter Type"
              size="small"
              value={paramType}
              onChange={(e) => setParamType(e.target.value)}
              sx={{ minWidth: 130 }}
            >
              {parameters.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Value"
              size="small"
              value={paramValue}
              onChange={(e) => setParamValue(e.target.value)}
              helperText={`Unit: ${parameters.find(p => p.value === paramType).unit}`}
            />
            <Button variant="contained" color="primary" onClick={addData}>
              Add Coil Data
            </Button>
          </Box>
        )}

        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={coilData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>

        {role === "admin" && (
          <Typography variant="h6" sx={{ marginTop: 3 }}>
            Admin Panel – Manage users, assign roles, and oversee system activity.
          </Typography>
        )}
      </Paper>
    </Container>
  );
}