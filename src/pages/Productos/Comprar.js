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

export default function Comprar() {
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

  const getData = () => {
    axios
      .get(`https://635767892712d01e140742e9.mockapi.io/api/v1/carros`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://635767892712d01e140742e9.mockapi.io/api/v1/carros/${id}`)
      .then(() => {
        getData();
      });
  };
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
              <TableCell align="right">PRICE</TableCell>
              <TableCell align="center">DESCRIPTION</TableCell>
              <TableCell align="center">COMPRAR</TableCell>
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
                {isLoading && <TableCell align="right">{data.year}</TableCell>}
                {isLoading && <TableCell align="right">{data.price}</TableCell>}
                {isLoading && (
                  <TableCell align="center">{data.description}</TableCell>
                )}
                <TableCell align="center">
                  <Link to="/gracias">
                    <Button
                      variant="contained"
                      data-testid="btnComR"
                      onClick={() => {
                        onDelete(data.id);
                      }}
                    >
                      Comprar Finalmente
                    </Button>
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
