import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Citas from "../pages/Citas/Citas";
import RevisarCitas from "../pages/Citas/RevisarCitas";

jest.spyOn(console, "error").mockImplementation(() => {});

describe("Pagina de Revisar Citas", () => {
  it("Ver que este el input enable", () => {
    render(<RevisarCitas />, { wrapper: BrowserRouter });
    expect(screen.getByTestId("inputCi")).toBeEnabled();

  });
  it("Ver que este el boton", () => {
    render(<RevisarCitas />, { wrapper: BrowserRouter });
    expect(screen.getByText("Revisar cita")).toBeInTheDocument();
    expect(screen.getByText("Eliminar cita")).toBeInTheDocument();

  });
  it("Ver que esten los campos a mostrar", () => {
    render(<RevisarCitas />, { wrapper: BrowserRouter });
    expect(screen.getByText("Nombre del Cliente")).toBeInTheDocument();
    expect(screen.getByText("Telefono Cliente")).toBeInTheDocument();
    expect(screen.getByText("Fecha de la cita")).toBeInTheDocument();

  });
});
