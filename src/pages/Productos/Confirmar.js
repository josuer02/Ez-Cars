import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Confirmar() {
  const [name, setCarName] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("ID"));
    setCarName(localStorage.getItem("name"));
    setPrice(localStorage.getItem("price"));
    setYear(localStorage.getItem("year"));
    setDescription(localStorage.getItem("description"));
  }, []);

  const sendDataToAPI = () => {
    axios
      .post(`https://635767892712d01e140742e9.mockapi.io/api/v1/carros`, {
        id,
        name,
        price,
        year,
        description,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  const handleClick = () => {
    sendDataToAPI();
    onDelete(id);
  };

  const onDelete = (id) => {
    axios
      .delete(`https://635767892712d01e140742e9.mockapi.io/api/v1/reservas/${id}`)
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
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
            disabled
            label="Name"
            id="outlined-disabled"
            value={name}
            onChange={(e) => setCarName(e.target.value)}
          />
          <TextField
            disabled
            label="ID"
            id="outlined-disabled"
            value={id}
            onChange={(e) => setId(e.target.value)}
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
          >
            {" "}
          </TextField>
          <div>
            <Link to="/home">
              <Button variant="contained" onClick={handleClick} size="large">
                Confirmar 
              </Button>
            </Link>
          </div>
        </div>
      </Box>
    </div>
  );
}
