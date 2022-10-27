import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
function RevisarCitas() {
    const [apiData, setApi] = useState({});
    const [telefono, setTel] = useState();
    const [idButton, setIdButton] = useState(1);
  
    const handleClick = () => {
      setIdButton(telefono);
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
    
  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <TextField fullWidth label="ID de cita" id="fullWidth" value={telefono} onChange={(e) => setTel(e.target.value)} />
      <div>
      <Button variant="contained" size = 'large' onClick={handleClick}>Revisar cita</Button>
      <Button variant="contained" size = 'large'>Eliminar cita</Button>
      </div>
      <div>{apiData.name}</div>
      <div>{apiData.fecha}</div>
      <div>{apiData.telefono}</div>
    </Box>
  );
}
export default RevisarCitas