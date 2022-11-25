describe("NavBar", () => {
    it("Darle Click a todos las pestañas", () => {
      cy.visit("localhost:3000");
      cy.get('[data-testid="linkPr"]').click();
      cy.url().should('include', 'localhost:3000/productos')
      cy.get('[data-testid="linkCt"]').click();
      cy.url().should('include', 'localhost:3000/cotizar')
      cy.get('[data-testid="linkTd"]').click();
      cy.url().should('include', 'localhost:3000/testdrive')
      cy.get('[data-testid="linkCi"]').click();
      cy.url().should('include', 'localhost:3000/citas')
      cy.get('[data-testid="linkVd"]').click();
      cy.url().should('include', 'localhost:3000/vender')
      cy.get('[data-testid="linkRes"]').click();
      cy.url().should('include', 'localhost:3000/reservas')
      
    });
  });
  