import React from 'react'
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Gracias = () => {

  return (
    <div>
        <h1>GRACIAS</h1>
        <Link to="/home">
        <Button variant="contained" color="success" data-testid='btnGracias'>
            Volver al Menu Principal
        </Button>
        </Link>
    </div>
  );
}

export default Gracias