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
function RevisarCitas() {
  const [apiData, setApi] = useState({});
  const [telefono, setTel] = useState();
  const [idButton, setIdButton] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = () => {
    setIdButton(telefono);
  };
  const handleClick2 = () => {
    onDelete(telefono);
  };
  async function fetchData() {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `https://635767892712d01e140742e9.mockapi.io/api/v1/citas/${telefono}`
      );

      setApi(data);
    } catch (error) {}
    setIsLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [idButton]);

  const onDelete = (telefono) => {
    axios
      .delete(
        `https://635767892712d01e140742e9.mockapi.io/api/v1/citas/${telefono}`
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <TextField
        fullWidth
        label="ID de cita"
        id="fullWidth"
        value={telefono}
        onChange={(e) => setTel(e.target.value)}
        data-testid="inputCi"
      />
      <div>
        <Button
          variant="contained"
          size="large"
          data-testid="btnVerCi"
          onClick={handleClick}
        >
          Revisar cita
        </Button>
        <Link to="/gracias">
          <Button
            variant="contained"
            size="large"
            data-testid="btnDeleteCi"
            onClick={handleClick2}
          >
            Eliminar cita
          </Button>
        </Link>
      </div>
      <p></p>
      <p></p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nombre del Cliente</TableCell>
              <TableCell align="center">Telefono Cliente</TableCell>
              <TableCell align="center">Fecha de la cita</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" data-testid="nameCi">{apiData.name}</TableCell>
              <TableCell align="center" data-testid="telCi">{apiData.telefono}</TableCell>
              <TableCell align="center" data-testid="dateCi">{apiData.fecha}</TableCell>

              <TableCell align="center"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default RevisarCitas;
