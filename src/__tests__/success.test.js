import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

import Succes from "../pages/Productos/Success";

jest.spyOn(console, "error").mockImplementation(() => {});

describe("Pagina de Success", () => {
  it("Ver carguen los componentes", () => {
    render(<Succes />, { wrapper: BrowserRouter });
    expect(screen.getByRole("heading")).toHaveTextContent(/reserva exitosa/i);
  });
  it("Ver que este el boton", () => {
    render(<Succes />, { wrapper: BrowserRouter });
    expect(screen.getByText("Ver Reservas")).toBeInTheDocument();
    expect(screen.getByText("Volver al Menu Principal")).toBeInTheDocument();
  });
});
