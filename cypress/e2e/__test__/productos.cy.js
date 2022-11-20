import { cyan } from "@mui/material/colors";

describe("Productos Page", () => {
  it("Visitar la url de productos y ver que tenga el texto de productos", () => {
    cy.visit("localhost:3000/productos");
    cy.contains("Inventario");
  });
 // it("Darle click al btn de comprar y ver que nos aparezca el boton de comprar definitivamente", () => {
 //   cy.get('[data-testid="btnComF"]').click({multiple: true});
 //   cy.get('[data-testid="btnComR"]').should('be.visible');
 // });
 // it("Realizar compra", ()=>{
 //   cy.get('[data-testid="btnComR"]').click();
 //   cy.url().should('include', 'localhost:3000/gracias')
 // })
  

});
