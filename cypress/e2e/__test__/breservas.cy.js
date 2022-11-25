describe("Reservas Page", () => {
  it("Darle al btn de reserva", () => {
    cy.visit("localhost:3000/productos");
    cy.get('[data-testid="btnReserva"]').click();
    cy.url().should("include", "localhost:3000/reserva");
  });
  it("Ver que los fields esten ", () => {
    cy.get('[data-testid="inputCar"]').should("be.visible");
    cy.get('[data-testid="inputID"]').should("be.visible");
    cy.get('[data-testid="inputYear"]').should("be.visible");
    cy.get('[data-testid="inputPrice"]').should("be.visible");
    cy.get('[data-testid="inputDes"]').should("be.visible");
  });
  it("Hacer una reserva ", () => {
    cy.get('[data-testid="inputName"]').type("Wolff");
    cy.get('[data-testid="inputTel"]').type("24345678");
    //cy.get('[data-testid="btnSbm"]').click();
    //cy.url().should("include", "localhost:3000/success);
  });
  it("Ver una reserva ", () => {
    cy.visit("localhost:3000/reservas");
    cy.get('[data-testid="inputReservas"]').type("4");
    cy.get('[data-testid="verReservas"]').click();
    cy.get('[data-testid="inputReservas"]').clear();
  });
  
});
