import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function Citas() {
  const [name, setName] = useState("");
  const [telefono, setTel] = useState("");
  const [fecha, setDate] = useState("");
  
  const sendDataToAPI = () => {
    axios
      .post(`https://635767892712d01e140742e9.mockapi.io/api/v1/citas`, {
        name,
        telefono,
        fecha,
      })
      .then((response) => {
        console.log(response.data);
		
          });
  };
  return (
<h1>
      {" "}
      AGENDA TU CITA
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
            label="Telefono"
            onChange={(e) => setTel(e.target.value)}
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
            <Link to="/revisarcitas">
              <Button variant="contained" size="large">
                Revisar mis citas
              </Button>
            </Link>
          </div>
        </div>
      </Box>
    </h1>
)
}
export default Citas