describe("logged user access unhappy paths", () => {
    beforeEach(() => {
        //logging in user and checking if it is logged in correctly

        cy.visit("http://localhost:3000/login");

        cy.get("[data-cy=email-container] > input").clear();
        cy.get("[data-cy=email-container] > input").type("peter@abv.bg");
        cy.get("[data-cy=password-container] > input").clear();
        cy.get("[data-cy=password-container] > input").type("123456");
        cy.get("[data-cy=submit]").click();
        cy.url().should("eq", "http://localhost:3000/catalog");
        cy.contains("Welcome, DEFAULT USER").should("be.visible");
    });

    it("logged user should not be able to see Login functionality", () => {
        cy.get('[data-cy="header-links-list"]').should("not.contain", "LOGIN");
    });

    it("logged user should not be able to go to Login page by typing the url in browser address bar", () => {
        cy.visit("http://localhost:3000/login");
        cy.url().should("eq", "http://localhost:3000/");
    });

    it("logged user should not be able to see Register functionality", () => {
        cy.get('[data-cy="header-links-list"]').should(
            "not.contain",
            "REGISTER"
        );
    });

    it("logged user should not be able to go to Register page by typing the url in browser address bar", () => {
        cy.visit("http://localhost:3000/register");
        cy.url().should("eq", "http://localhost:3000/");
    });
});
