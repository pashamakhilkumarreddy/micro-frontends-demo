describe("Home E2E Test", () => {
  it("should add an item to the cart", () => {
    cy.visit("http://localhost:5000/");
    cy.get("#showLogin").click();
    cy.get("#loginBtn").click();
    cy.get("#showcart-icon").click();
    cy.get("#clearcart").click();
    cy.get("#addtocart_2").click();
    cy.get("#cart").click();
    cy.get("#grand_total").should("contain", "$8.99");
  });
});
