import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import TestDrive from "../pages/TestDrives/TestDrive";

jest.spyOn(console, "error").mockImplementation(() => {});

describe("Pagina de testdrives", () => {
  it("Ver carguen los componentes con inputs enabled", () => {
    render(<TestDrive />, { wrapper: BrowserRouter });

    expect(screen.getByRole("heading")).toHaveTextContent(
      /Agenda tu testdrive/i
    );
    expect(screen.getByTestId("inputNameTd")).toBeEnabled();
    expect(screen.getByTestId("inputCarTd")).toBeEnabled();
    expect(screen.getByTestId("inputFechaTd")).toBeEnabled();
  });
  it("Ver que este el boton", () => {
    render(<TestDrive />, { wrapper: BrowserRouter });
    expect(screen.getByText("Submit")).toBeInTheDocument();
    expect(screen.getByText("Revisar mis TestDrive")).toBeInTheDocument();
  });
});
