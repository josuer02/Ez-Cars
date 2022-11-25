describe("Homepage test", () => {
  it("Ver que el input este vacio", () => {
    cy.visit("localhost:3000/");
    cy.get('[data-testid="inputHome"]').should("have.length", 1);
  });
  it("Ingresar un ID y presionar el boton", () => {
    cy.get('[data-testid="inputHome"]').type("4");
    cy.get('[data-testid="btnVer"]').click();
    cy.get('[data-testid="clientName"]').should("have.length", 1);
    cy.get('[data-testid="clientTel"]').should("have.length", 1);
    cy.get('[data-testid="inputHome"]').clear();
  });
  it("Ingresar un ID y presionar el boton de desuscribirse", () => {
    cy.get('[data-testid="inputHome"]').type("8"); //meterle un id existente para realizar la prueba
    cy.get('[data-testid="btnDelete"]').click();

    cy.contains('GRACIAS')
  // si el id no Existe, tira error 404 y no pasa la prueba
  //  cy.get('[data-testid="btnGracias"]').click();
  // cy.url().should('include', 'localhost:3000/home')


  });
});
