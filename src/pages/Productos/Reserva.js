import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Loader } from "semantic-ui-react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Reserva() {
  const [apiData, setApi] = useState({});
  const [id, setID] = useState(1);
  const [idButton, setIdButton] = useState(1);

  const handleClick = () => {
    setIdButton(id);
  };
  useEffect(() => {
    axios
      .get(
        `https://635767892712d01e140742e9.mockapi.io/api/v1/carros/${idButton}`
      )
      .then((getData) => {
        console.log(getData);
        setApi(getData.data);
      });
  }, [idButton]);

   

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setID(e.target.value)} />
      <button type="button" value={id} onClick={handleClick} />
      
      <div>{apiData.name}</div>
      <div>{apiData.price}</div>
      <div>{apiData.year}</div>
    </div>
  );
}
