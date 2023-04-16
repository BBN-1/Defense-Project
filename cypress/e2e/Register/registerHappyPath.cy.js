describe("Register Page", () => {
    it("should register user correctly and redirect to correct page on app", () => {
        cy.visit("http://localhost:3000/register");

        cy.get("[data-cy=username-container] > input").type("newUser12");
        cy.get("[data-cy=email-container] > input").type("email@newuser.bg");
        cy.get("[data-cy=password-container] > input").type("123456");
        cy.get("[data-cy=passConfirm-container] > input").type("123456");

        cy.get("[data-cy=submit]").click();

        cy.url().should("eq", "http://localhost:3000/");
        cy.contains("Welcome, NEWUSER12").should("be.visible");
    });
});
