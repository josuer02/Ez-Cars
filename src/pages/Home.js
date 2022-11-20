import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import Loader from '../components/Loader'
import { Link } from "react-router-dom";
function Home() {
  const [apiData, setApi] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [telefono, setTel] = useState();
  const [idButton, setIdButton] = useState(1);

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
        `https://635767892712d01e140742e9.mockapi.io/api/v1/clientes/${telefono}`
      );
      
      setApi(data);
    } catch (error) {
    }
    setIsLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [idButton]);

  const onDelete = (telefono) => {
    axios
      .delete(
        `https://635767892712d01e140742e9.mockapi.io/api/v1/clientes/${telefono}`
      )
      .then((res) => {
        console.log(res.data);
      });
  };
  let content;

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <Loader/>;
  }

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <div>{content}</div>
      <TextField
        fullWidth
        label="ID cliente"
        id="fullWidth"
        data-testid="inputHome"
        value={telefono}
        onChange={(e) => setTel(e.target.value)}
      />
      <div>
        <Button
          variant="contained"
          size="large"
          data-testid="btnVer"
          onClick={handleClick}
        >
          Ver Datos
        </Button>
        <Link to="/gracias">
          <Button variant="contained" size="large" data-testid="btnDelete" onClick={handleClick2}>
            Desuscribirse
          </Button>
        </Link>
      </div>
      <p></p>
      <p></p>
      <div></div>
      <div></div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nombre del Cliente</TableCell>
              <TableCell align="center">Telefono Cliente</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" data-testid="clientName">
                {apiData.name}
              </TableCell>
              <TableCell align="center" data-testid="clientTel">
                {apiData.telefono}
              </TableCell>

              <TableCell align="center"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default Home;
