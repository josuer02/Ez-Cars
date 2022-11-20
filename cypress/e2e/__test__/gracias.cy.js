describe("Gracias Page", () => {
  it("Darle Click al boton", () => {
    cy.visit("localhost:3000/gracias");
    cy.get('[data-testid="btnGracias"]').click();
    cy.url().should('include', 'localhost:3000/home')
    
  });
});
