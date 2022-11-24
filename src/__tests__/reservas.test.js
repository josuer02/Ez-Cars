import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

import Reservas from "../pages/Productos/Reservas";

jest.spyOn(console, "error").mockImplementation(() => {});

describe("Pagina de Reservas", () => {
  it("Ver carguen los componentes con 1 input enable", () => {
    render(<Reservas />, { wrapper: BrowserRouter });
    expect(screen.getByText("Nombre del Cliente")).toBeInTheDocument();
    expect(screen.getByText("Telefono Cliente")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("Year")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Cancelar")).toBeInTheDocument();
    expect(screen.getByTestId("inputReservas")).toBeEnabled();
  });
  it("Ver que este el boton", () => {
    render(<Reservas />, { wrapper: BrowserRouter });
    expect(screen.getByText("Ver Reserva")).toBeInTheDocument();
    expect(screen.getByText("Eliminar")).toBeInTheDocument();
  });
});
