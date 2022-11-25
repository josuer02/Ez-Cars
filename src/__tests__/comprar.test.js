import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Comprar from "../pages/Productos/Comprar";

jest.spyOn(console, "error").mockImplementation(() => {});

describe("Pagina de Comprar", () => {
  it("Ver que todo cargue en los la tabla", async () => {
    render(<Comprar />, { wrapper: BrowserRouter });

    await waitFor(() => {
      screen.getAllByTestId("dataName");
      screen.getAllByTestId("dataYear");
      screen.getAllByTestId("dataPrice");
      screen.getAllByTestId("dataDes");
      screen.getAllByTestId("btnComR");
    });
  });
  
});
