import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

import Gracias from "../pages/Gracias";

jest.spyOn(console, "error").mockImplementation(() => {});

describe("Pagina de Gracias", () => {
  it("Ver carguen los componentes", () => {
    render(<Gracias />, { wrapper: BrowserRouter });
    expect(screen.getByRole("heading")).toHaveTextContent(/gracias/i);
  });
  it("Ver que este el boton", () => {
    render(<Gracias />, { wrapper: BrowserRouter });
    expect(screen.getByText("Volver al Menu Principal")).toBeInTheDocument();
  });
});
