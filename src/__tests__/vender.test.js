import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Vender from "../pages/Vender/Vender";

jest.spyOn(console, "error").mockImplementation(() => {});

describe("Pagina de vender", () => {
  it("Ver carguen los componentes con los inputs enabled", () => {
    render(<Vender />, { wrapper: BrowserRouter });
   
    expect(screen.getByRole("heading")).toHaveTextContent(/vende tu carro/i);
    expect(screen.getByTestId("inputNameVd")).toBeEnabled();
    expect(screen.getByTestId("inputYearVd")).toBeEnabled();
    expect(screen.getByTestId("inputPriceVd")).toBeEnabled();
    expect(screen.getByTestId("inputDesVd")).toBeEnabled();



  });
  it("Ver que este el boton", () => {
    render(<Vender />, { wrapper: BrowserRouter });
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});