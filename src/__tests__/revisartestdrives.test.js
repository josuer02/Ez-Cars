import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import RevisarTestDrives from "../pages/TestDrives/RevisarTestDrives";

jest.spyOn(console, "error").mockImplementation(() => {});

describe("Pagina de Revisar testdrives", () => {
  it("Ver que este el input enable", () => {
    render(<RevisarTestDrives />, { wrapper: BrowserRouter });
    expect(screen.getByTestId("inputTestD")).toBeEnabled();

  });
  it("Ver que este el boton", () => {
    render(<RevisarTestDrives />, { wrapper: BrowserRouter });
    expect(screen.getByText("Revisar TestDrive")).toBeInTheDocument();
    expect(screen.getByText("Eliminar TestDrive")).toBeInTheDocument();

  });
  it("Ver que esten los campos a mostrar", () => {
    render(<RevisarTestDrives />, { wrapper: BrowserRouter });
    expect(screen.getByText("Nombre del Cliente")).toBeInTheDocument();
    expect(screen.getByText("Carro a probar")).toBeInTheDocument();
    expect(screen.getByText("Fecha")).toBeInTheDocument();

  });
});
