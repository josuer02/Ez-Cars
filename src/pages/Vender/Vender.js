import React from "react";
import axios from "axios";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function Vender() {
  const [name, setCarName] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  const sendDataToAPI = () => {
    axios
      .post(`https://635767892712d01e140742e9.mockapi.io/api/v1/carros`, {
        name,
        price,
        year,
        description,
      })
      .then((response) => {
        console.log(response.data);
		
          });
  };
  return (
    <h1>
      {" "}
      VENDE TU CARRO
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
            label="Name"
            onChange={(e) => setCarName(e.target.value)}
          />
          <TextField
            id="outlined-year"
            label="Year"
            onChange={(e) => setYear(e.target.value)}
          />
          <TextField
            id="outlined-price"
            label="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            id="outlined-description"
            label="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <div>
            <Link to="/productos">
              <Button variant="contained" onClick={sendDataToAPI} size="large">
                Submit
              </Button>
            </Link>
          </div>
        </div>
      </Box>
    </h1>
  );
}

export default Vender;
