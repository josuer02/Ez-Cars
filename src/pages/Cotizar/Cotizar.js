import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const Cotizar = () => {
  const [apiData, setApi] = useState([]);
  const [name, setName] = useState("");
  const [telefono, setTel] = useState("");
  const [idButton, setIdButton] = useState('');
  const [id, setId] = useState('');

  const handleClick = () => {
    sendDataToAPI();
    setIdButton();
  };
  useEffect(() => {
    axios
      .get(
        `https://635767892712d01e140742e9.mockapi.io/api/v1/carros/${id}`
      )
      .then((getData) => {
        console.log(getData);
        setApi(getData.data);
      });
  }, [idButton]);

  const sendDataToAPI = () => {
    axios
      .post(`https://635767892712d01e140742e9.mockapi.io/api/v1/clientes`, {
        name,
        telefono
      })
      .then((response) => {
        console.log(response.data);
		
          });
  };
  return (
  <h1>
      {" "}
      Ingresa tus datos
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
            label="ID carro"
            onChange={(e) => setId(e.target.value)}
          />

          <div>
              <Button variant="contained" onClick={handleClick} size="large">
                Cotizar
              </Button>
          </div>
          <div>{apiData.price}</div>
          <div>{apiData.description}</div>
        </div>
      </Box>
    </h1>
    )
  };
  
  export default Cotizar;