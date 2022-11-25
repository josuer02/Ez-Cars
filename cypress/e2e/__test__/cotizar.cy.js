describe("Cotizar Page", () => {
  it("Ir a Cotizar", () => {
    cy.visit("localhost:3000/cotizar");
    cy.contains("Ingresa tus datos");
  });
  it("Ingresar los datos", () => {
    cy.get('[data-testid="inputN"]').type("Wolff");
    cy.get('[data-testid="inputT"]').type("24345678");
    cy.get('[data-testid="inputID"]').type("1");
    //cy.get('[data-testid="btnCotizar"]').click();
    cy.get('[data-testid="info1Cotizar"]').should("have.length", 1);
    cy.get('[data-testid="info2Cotizar"]').should("have.length", 1);
    cy.get('[data-testid="info3Cotizar"]').should("have.length", 1);
  });
});
