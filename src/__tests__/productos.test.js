import {  render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Productos from "../pages/Productos/Productos";

jest.spyOn(console, "error").mockImplementation(() => {});

describe("Pagina de Productos", () => {
  it("Ver que todo cargue", async () => {
    render(<Productos />, { wrapper: BrowserRouter });
    expect(screen.getByRole("heading")).toBeInTheDocument();
    await waitFor(() => {
      screen.getAllByTestId("nameCar");
      screen.getAllByTestId("yearCar");
    });
  });
  beforeEach(() => {
    localStorage.clear();
  });
  it("Ver que haya el localStorage este vacio", () => {
    render(<Productos />, { wrapper: BrowserRouter });
    expect(localStorage.setItem).toHaveLength(2);
  });

  it("Ver que este el boton", () => {
    render(<Productos />, { wrapper: BrowserRouter });
    expect(screen.getByText("COMPRAR")).toBeInTheDocument();
    expect(screen.getByText("RESERVAR")).toBeInTheDocument();
  });
});
