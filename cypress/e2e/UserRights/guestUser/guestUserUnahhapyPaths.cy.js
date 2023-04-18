describe("guest user access unhappy paths", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("guest user should not be able to see Logout functionality", () => {
        cy.get('[data-cy="header-links-list"]').should("not.contain", "LOGOUT");
    });

    it("guest user should not be able to go to Logout page by typing the url in browser address bar", () => {
        cy.visit("http://localhost:3000/logout");
        cy.url().should("eq", "http://localhost:3000/login");
    });

    it("guest user should not be able to see Create functionality", () => {
        cy.get('[data-cy="header-links-list"]').should("not.contain", "CREATE");
    });

    it("guest user should not be able to go to Create page by typing the url in browser address bar", () => {
        cy.visit("http://localhost:3000/create");
        cy.url().should("eq", "http://localhost:3000/login");
    });

    it("guest user should not be able to see Logged user welcome msg in header", () => {
        cy.get('[data-cy="header-links-list"]').should(
            "not.contain",
            "Welcome,"
        );
    });

    it("guest user should not be able to go to Profile page by typing the url in browser address bar", () => {
        cy.visit("http://localhost:3000/profile");
        cy.url().should("eq", "http://localhost:3000/login");
    });
});
