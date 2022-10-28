import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function TestDrive() {
  const [name, setName] = useState("");
  const [car, setCar] = useState("");
  const [date, setDate] = useState("");
  
  const sendDataToAPI = () => {
    axios
      .post(`https://635b4f29aa7c3f113dba2917.mockapi.io/api/v2/testdrives`, {
        name,
        car,
        date,
      })
      .then((response) => {
        console.log(response.data);
		
          });
  };
  return (
<h1>
      {" "}
      AGENDA TU TESTDRIVE
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-name"
            label="Nombre"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-year"
            label="Carro a probar"
            onChange={(e) => setCar(e.target.value)}
          />
          <TextField
            id="outlined-price"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />

          <div>
            <Link to="/productos">
              <Button variant="contained" onClick={sendDataToAPI} size="large">
                Submit
              </Button>
            </Link>
            <p></p>
            <Link to="/revisartestdrives">
              <Button variant="contained" size="large">
                Revisar mis TestDrive
              </Button>
            </Link>
          </div>
        </div>
      </Box>
    </h1>
)
}
export default TestDrive