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
import { Link } from "react-router-dom";
function RevisarTestDrives() {
  const [apiData, setApi] = useState({});
  const [id, setId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [idButton, setIdButton] = useState(1);

  const handleClick = () => {
    setIdButton(id);
  };
  const handleClick2 = () => {
    onDelete(id);
  };
  async function fetchData() {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `https://635b4f29aa7c3f113dba2917.mockapi.io/api/v2/testdrives/${id}`
      );

      setApi(data);
    } catch (error) {}
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [idButton]);

  const onDelete = (id) => {
    axios
      .delete(
        `https://635b4f29aa7c3f113dba2917.mockapi.io/api/v2/testdrives/${id}`
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
        label="ID TestDrive"
        id="fullWidth"
        data-testid="inputTestD"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <div>
        <Button
          variant="contained"
          size="large"
          data-testid="btnVerTestD"
          onClick={handleClick}
        >
          Revisar TestDrive
        </Button>
        <Link to="/gracias">
          <Button
            variant="contained"
            size="large"
            data-testid="btnDeleteTestD"
            onClick={handleClick2}
          >
            Eliminar TestDrive
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
              <TableCell align="center">Carro a probar</TableCell>
              <TableCell align="center">Fecha</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" data-testid="nameTestD">
                {apiData.name}
              </TableCell>
              <TableCell align="center" data-testid="carTestD">
                {" "}
                {apiData.car}
              </TableCell>
              <TableCell align="center" data-testid="dateTestD">
                {apiData.date}
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default RevisarTestDrives;
