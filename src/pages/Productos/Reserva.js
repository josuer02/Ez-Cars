import React, { useEffect, useState } from "react";
import axios from "axios";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Reserva() {


  const [name, setCarName] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientTel, setClientTel] = useState("");

  useEffect(() => {
    setId(localStorage.getItem('id'));
    setCarName(localStorage.getItem('name'));
    setPrice(localStorage.getItem('price'));
    setYear(localStorage.getItem('year'));
    setDescription(localStorage.getItem('description'));
  }, [])

  const sendDataToAPI = () => {
    axios
      .post(`https://635767892712d01e140742e9.mockapi.io/api/v1/reservas`, {
        id,
        name,
        price,
        year,
        description,
        clientName,
        clientTel
      })
      .then((response) => {
        console.log(response.data);

      });
  };
  





  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Ingrese su Nombre"

            onChange={(e) => setClientName(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Ingrese su telefono"
            type="number"
            
            onChange={(e) => setClientTel(e.target.value)}
          />
          <TextField
            disabled
            label="Name"
            id="outlined-disabled"
            value={name}
            onChange={(e) => setCarName(e.target.value)}
          />
          <TextField
            disabled
            label="Year"
            id="outlined-disabled"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <TextField
            disabled
            label="Price"
            id="outlined-disabled"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            disabled
            label="Description"
            id="outlined-disabled"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div>
            <Button variant="contained" onClick={sendDataToAPI} size="large">
              Submit
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
}
