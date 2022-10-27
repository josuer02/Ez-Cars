import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
function Citas() {
  const [name, setName] = useState("");
  const [telefono, setTel] = useState("");
  const [fecha, setDate] = useState("");
  
  const sendDataToAPI = () => {
    axios
      .post(`https://635767892712d01e140742e9.mockapi.io/api/v1/citas`, {
        name,
        telefono,
        fecha,
      })
      .then((response) => {
        console.log(response.data);
		
          });
  };
  return (
  <Form>
    <Form.Field>
      <label>Nombre</label>
      <input placeholder='Nombre' onChange={(e) => setName(e.target.value)}/>
      

    </Form.Field>
    <Form.Field>
      <label>Telefono</label>
      <input placeholder='Número de teléfono' onChange={(e) => setTel(e.target.value)}/>
      
    </Form.Field>
    <Form.Field>
      <label>Fecha</label>
      <input placeholder='Fecha de cita' onChange={(e) => setDate(e.target.value)}/>
      

    </Form.Field>
    <Form.Field>
      <Checkbox label='Acepto los terminos y condiciones' />
    </Form.Field>
    <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
    <Link to="/revisarcitas">
       <Button variant="contained">Revisar mis citas</Button>
    </Link>
  </Form>
)
}
export default Citas