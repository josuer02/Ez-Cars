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

export default function Productos() {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get(`https://635767892712d01e140742e9.mockapi.io/api/v1/carros`)
      .then((getData) => {
        setIsLoading(true);
        setApiData(getData.data);
      });
  }, []);

  const setData = (id, name, year, price, description) => {
    localStorage.setItem('ID', id)
    localStorage.setItem('name', name)
    localStorage.setItem('year', year)
    localStorage.setItem('price', price)
    localStorage.setItem('description', description)
  }

  return (
    <div className="centered">
      <TableContainer component={Paper}>
        {!isLoading && <Loader />}

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">NAME</TableCell>
              <TableCell align="right">YEAR</TableCell>
              <TableCell align="center">COMPRAR</TableCell>
              <TableCell align="center">RESERVAR</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apiData.map((data) => (
              <TableRow
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.id}
                </TableCell>
                {isLoading && <TableCell align="right">{data.name}</TableCell>}
                {isLoading && (
                  <TableCell align="center">{data.year}</TableCell>
                )}
                <TableCell align="center">
                  <Link to="/compras">
                    <Button variant="contained">Comprar</Button>
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <Link to="/reserva">
                    <Button variant="contained" onClick={() => setData(data.id, data.name, data.year, data.price, data.description)}>Reserva</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
