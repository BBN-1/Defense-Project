describe("Login Page Happy Path", () => {
    it("should login user correctly and redirect to home page", () => {
        cy.visit("http://localhost:3000/login");

        cy.get("[data-cy=email-container] > input").clear();
        cy.get("[data-cy=email-container] > input").type("peter@abv.bg");
        cy.get("[data-cy=password-container] > input").clear();
        cy.get("[data-cy=password-container] > input").type("123456");
        cy.get("[data-cy=submit]").click();
        cy.url().should("eq", "http://localhost:3000/catalog");
        cy.contains("Welcome, DEFAULT USER").should("be.visible");
    });
});
