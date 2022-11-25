import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Reserva from "../pages/Productos/Reserva";

jest.spyOn(console, "error").mockImplementation(() => {});

describe("Pagina de Reservas", () => {
  it("Ver carguen los componentes con 2 inputs enabled", () => {
    render(<Reserva />, { wrapper: BrowserRouter });
    expect(screen.getByTestId("inputName")).toBeEnabled();
    expect(screen.getByTestId("inputTel")).toBeEnabled();
    expect(screen.getByTestId("inputCar")).toBeInTheDocument();
    expect(screen.getByTestId("inputID")).toBeInTheDocument();
    expect(screen.getByTestId("inputYear")).toBeInTheDocument();
    expect(screen.getByTestId("inputPrice")).toBeInTheDocument();
    expect(screen.getByTestId("inputDes")).toBeInTheDocument();
  });
  it("Ver que este el boton", () => {
    render(<Reserva />, { wrapper: BrowserRouter });
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});
