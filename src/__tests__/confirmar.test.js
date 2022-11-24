import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Confirmar from "../pages/Productos/Confirmar";

jest.spyOn(console, "error").mockImplementation(() => {});

describe("Pagina de Confirmar", () => {
  it("Ver carguen los componentes", async () => {
    render(<Confirmar />, { wrapper: BrowserRouter });

    await waitFor(() => {
      screen.getAllByTestId("id");
      screen.getAllByTestId("nameC");
      screen.getAllByTestId("price");
      screen.getAllByTestId("description");
    });
  });
  it("Ver que este el boton", () => {
    render(<Confirmar />, { wrapper: BrowserRouter });
    expect(screen.getByText("Confirmar")).toBeInTheDocument();
  });
});