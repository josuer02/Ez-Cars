describe("Vender Page", () => {
    it("Ver que los Textfield esten", () => {
      cy.visit("localhost:3000/vender");
      cy.get('[data-testid="inputNameVd"]').should("be.visible");
      cy.get('[data-testid="inputYearVd"]').should("be.visible");
      cy.get('[data-testid="inputPriceVd"]').should("be.visible");
      cy.get('[data-testid="inputDesVd"]').should("be.visible");

    });
    it("Llenar el forms y darle submit ", () => {
        cy.get('[data-testid="inputNameVd"]').type("Audi S7");
        cy.get('[data-testid="inputYearVd"]').type("2022");
        cy.get('[data-testid="inputPriceVd"]').type("$350,000");
        cy.get('[data-testid="inputDesVd"]').type("Audi blanco S7 nuevo, F/E");
      cy.get('[data-testid="btnSubmitVd"]').click();
  
      cy.url().should("include", "localhost:3000/productos");
    });
    
})