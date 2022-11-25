
describe("Productos Page", () => {
  it("Visitar la url de productos y ver que tenga el texto de productos", () => {
    cy.visit("localhost:3000/productos");
    cy.contains("Inventario");
  });

  

});
