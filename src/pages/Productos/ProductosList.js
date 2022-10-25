import React from "react";
import classes from "./ProductList.module.css";
import Productos from "./Productos";

const ProductosList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.carros.map((carro) => (
        <Productos
          id={carro.id}
          title={carro.title}
          releaseDate={carro.releaseDate}
          openingText={carro.openingText}
        />
      ))}
    </ul>
  );
};
export default ProductosList;
