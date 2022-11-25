describe("Citas Page", () => {
    it("Ver que los Textfield esten", () => {
      cy.visit("localhost:3000/citas");
      cy.get('[data-testid="inputNameCi"]').should("be.visible");
      cy.get('[data-testid="inputTelCi"]').should("be.visible");
      cy.get('[data-testid="inputDateCi"]').should("be.visible");
    });
    it("Llenar el forms y darle submit ", () => {
      cy.get('[data-testid="inputNameCi"]').type("Wolff");
      cy.get('[data-testid="inputTelCi"]').type("23446789");
      cy.get('[data-testid="inputDateCi"]').type("2022-11-26");
      cy.get('[data-testid="btnSubmitCi"]').click();
  
      cy.url().should("include", "localhost:3000/productos");
    });
    it("Revisar Citas ", () => {
        cy.visit("localhost:3000/revisarcitas");
        cy.get('[data-testid="inputCi"]').type("2");
        cy.get('[data-testid="btnVerCi"]').click();
        cy.get('[data-testid="nameCi"]').should("have.length", 1);
        cy.get('[data-testid="telCi"]').should("have.length", 1);
        cy.get('[data-testid="dateCi"]').should("have.length", 1);
        cy.get('[data-testid="inputCi"]').clear();
    
      });
      it("Ingresar un ID y presionar el boton de desuscribirse", () => {
        cy.get('[data-testid="inputCi"]').type("3"); //meterle un id existente para realizar la prueba
        //comentado para no borrar datos, meter siempre un id existente y descomentar esto: 
        //cy.get('[data-testid="btnDeleteCi"]').click();
        //cy.contains('GRACIAS')
    
    
      });
  });
  