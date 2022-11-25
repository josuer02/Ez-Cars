import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Citas from "../pages/Citas/Citas";

jest.spyOn(console, "error").mockImplementation(() => {});

describe("Pagina de Citas", () => {
  it("Ver carguen los componentes y esten enabled", () => {
    render(<Citas />, { wrapper: BrowserRouter });
   
    expect(screen.getByRole("heading")).toHaveTextContent(/agenda tu cita/i);
    expect(screen.getByTestId("inputNameCi")).toBeEnabled();
    expect(screen.getByTestId("inputTelCi")).toBeEnabled();
    expect(screen.getByTestId("inputDateCi")).toBeEnabled();



  });
  it("Ver que este el boton", () => {
    render(<Citas />, { wrapper: BrowserRouter });
    expect(screen.getByText("Submit")).toBeInTheDocument();
    expect(screen.getByText("Revisar mis citas")).toBeInTheDocument();

  });
});