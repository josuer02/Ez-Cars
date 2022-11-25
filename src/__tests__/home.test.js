import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

jest.spyOn(console, "error").mockImplementation(() => {});

describe("Pagina de Home", () => {
  it("Ver que este el input enable", () => {
    render(<Home />, { wrapper: BrowserRouter });
    expect(screen.getByTestId("inputHome")).toBeEnabled();

  });
  it("Ver que este el boton", () => {
    render(<Home />, { wrapper: BrowserRouter });
    expect(screen.getByText("Ver Datos")).toBeInTheDocument();
    expect(screen.getByText("Desuscribirse")).toBeInTheDocument();

  });
  it("Ver que esten los campos a mostrar", () => {
    render(<Home />, { wrapper: BrowserRouter });
    expect(screen.getByText("Nombre del Cliente")).toBeInTheDocument();
    expect(screen.getByText("Telefono Cliente")).toBeInTheDocument();

  });
});
