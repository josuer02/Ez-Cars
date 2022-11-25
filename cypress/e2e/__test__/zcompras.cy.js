describe("Compras Page", () => {
    it("Darle al btn de comprar", () => {
      cy.visit("localhost:3000/productos");
      cy.get('[data-testid="btnComF"]').click();
      cy.url().should("include", "localhost:3000/compras");
      //Ver que hayan campos llenos
      cy.get('[data-testid="dataName"]').should("be.visible");
      cy.get('[data-testid="dataPrice"]').should("be.visible");
      cy.get('[data-testid="dataYear"]').should("be.visible");
      cy.get('[data-testid="dataDes"]').should("be.visible");
      //comprar finalmente
      
      cy.get('[data-testid="btnComR"]').click();
      
      cy.url().should("include", "localhost:3000/gracias");
      cy.visit("localhost:3000");
    });})