import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function RevisarTestDrives() {
    const [apiData, setApi] = useState({});
    const [id, setId] = useState();
    const [idButton, setIdButton] = useState(1);
  
    const handleClick = () => {
      setIdButton(id);
    };
    const handleClick2 = () => {
        onDelete(id);
    };
    useEffect(() => {
      axios
        .get(
          `https://635b4f29aa7c3f113dba2917.mockapi.io/api/v2/testdrives/${id}`
        )
        .then((getData) => {
          console.log(getData);
          setApi(getData.data);
        });
    }, [idButton]);

    const onDelete = (id) => {
        axios
          .delete(`https://635b4f29aa7c3f113dba2917.mockapi.io/api/v2/testdrives/${id}`)
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
      <TextField fullWidth label="ID TestDrive" id="fullWidth" value={id} onChange={(e) => setId(e.target.value)} />
      <div>
      <Button variant="contained" size = 'large' onClick={handleClick}>Revisar TestDrive</Button>
      <Link to='/home'>
      <Button variant="contained" size = 'large' onClick={handleClick2}>Eliminar TestDrive</Button>
      </Link>
      </div>
      <div>{apiData.name}</div>
      <div>{apiData.date}</div>
      <div>{apiData.car}</div>
    </Box>
  );
}
export default RevisarTestDrives