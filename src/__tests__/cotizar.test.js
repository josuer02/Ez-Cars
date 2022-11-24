import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Cotizar from "../pages/Cotizar/Cotizar";

jest.spyOn(console, "error").mockImplementation(() => {});

describe("Pagina de Cotizar", () => {
  it("Ver carguen los componentes y esten enable", () => {
    render(<Cotizar />, { wrapper: BrowserRouter });
   
    expect(screen.getByTestId("inputN")).toBeEnabled();
    expect(screen.getByTestId("inputT")).toBeEnabled();
    expect(screen.getByTestId("inputID")).toBeEnabled();



  });
  it("Ver que este el boton", () => {
    render(<Cotizar />, { wrapper: BrowserRouter });
    expect(screen.getByText("Cotizar")).toBeInTheDocument();
  });
});