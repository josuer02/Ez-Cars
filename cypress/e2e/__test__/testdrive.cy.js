describe("Testdrive Page", () => {
  it("Ver que los Textfield esten", () => {
    cy.visit("localhost:3000/testdrive");
    cy.get('[data-testid="inputNameTd"]').should("be.visible");
    cy.get('[data-testid="inputCarTd"]').should("be.visible");
    cy.get('[data-testid="inputFechaTd"]').should("be.visible");
  });
  it("Llenar el forms y darle submit ", () => {
    cy.get('[data-testid="inputNameTd"]').type("Wolff");
    cy.get('[data-testid="inputCarTd"]').type("Porshe");
    cy.get('[data-testid="inputFechaTd"]').type("2022-11-26");
    cy.get('[data-testid="btnSubmitTD"]').click();
    cy.url().should("include", "localhost:3000/productos");
  });
  it("Revisar testdrives ", () => {
    cy.visit("localhost:3000/revisartestdrives");
    cy.get('[data-testid="inputTestD"]').type("5");
    cy.get('[data-testid="btnVerTestD"]').click();
    cy.get('[data-testid="nameTestD"]').should("have.length", 1);
    cy.get('[data-testid="carTestD"]').should("have.length", 1);
    cy.get('[data-testid="dateTestD"]').should("have.length", 1);
    cy.get('[data-testid="inputTestD"]').clear();

  });
  it("Ingresar un ID y presionar el boton de eliminar", () => {
    cy.get('[data-testid="inputTestD"]').type("12"); //meterle un id existente para realizar la prueba
    //comentado para no borrar datos, meter siempre un id existente y descomentar esto: 
    //cy.get('[data-testid="btnDeleteTestD"]').click();
    //cy.contains('GRACIAS')


  });
});
