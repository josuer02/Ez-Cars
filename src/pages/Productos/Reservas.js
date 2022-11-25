import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

function Reservas() {
  const [apiData, setApi] = useState({});
  const [telefono, setTel] = useState();
  const [idButton, setIdButton] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const setData = (id, name, year, price, description) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("name", name);
    localStorage.setItem("year", year);
    localStorage.setItem("price", price);
    localStorage.setItem("description", description);
  };
  async function fetchData() {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `https://635767892712d01e140742e9.mockapi.io/api/v1/reservas/${telefono}`
      );

      setApi(data);
    } catch (error) {}
    setIsLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [idButton]);

  const handleClick = () => {
    setIdButton(telefono);
  };

  const handleClick2 = () => {
    setData(
      apiData.id,
      apiData.name,
      apiData.year,
      apiData.price,
      apiData.description
    );
  };

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <TextField
        fullWidth
        label="ID reserva"
        id="fullWidth"
        value={telefono}
        onChange={(e) => setTel(e.target.value)}
        data-testid="inputReservas"
      />
      <div>
        <Button variant="contained" size="large"  data-testid="verReservas" onClick={handleClick}>
          Ver Reserva
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nombre del Cliente</TableCell>
              <TableCell align="center">Telefono Cliente</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Year</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Cancelar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{apiData.clientName}</TableCell>
              <TableCell align="center">{apiData.clientTel}</TableCell>
              <TableCell align="center">{apiData.name}</TableCell>
              <TableCell align="center">{apiData.price}</TableCell>
              <TableCell align="center">{apiData.year}</TableCell>
              <TableCell align="center">{apiData.description}</TableCell>

              <TableCell align="center">
                <Link to="/confirmar">
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleClick2}
                    data-testid="btnDeleteReservas"
                  >
                    Eliminar
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default Reservas;
