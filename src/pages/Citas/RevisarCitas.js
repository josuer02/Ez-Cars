import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function RevisarCitas() {
    const [apiData, setApi] = useState({});
    const [telefono, setTel] = useState();
    const [idButton, setIdButton] = useState(1);
  
    const handleClick = () => {
      setIdButton(telefono);
    };
    const handleClick2 = () => {
        onDelete(telefono);
    };
    useEffect(() => {
      axios
        .get(
          `https://635767892712d01e140742e9.mockapi.io/api/v1/citas/${telefono}`
        )
        .then((getData) => {
          console.log(getData);
          setApi(getData.data);
        });
    }, [idButton]);

    const onDelete = (telefono) => {
        axios
          .delete(`https://635767892712d01e140742e9.mockapi.io/api/v1/citas/${telefono}`)
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
      <TextField fullWidth label="ID de cita" id="fullWidth" value={telefono} onChange={(e) => setTel(e.target.value)} />
      <div>
      <Button variant="contained" size = 'large' onClick={handleClick}>Revisar cita</Button>
      <Link to='/home'>
      <Button variant="contained" size = 'large' onClick={handleClick2}>Eliminar cita</Button>
      </Link>
      </div>
      <div>{apiData.name}</div>
      <div>{apiData.fecha}</div>
      <div>{apiData.telefono}</div>
    </Box>
  );
}
export default RevisarCitas