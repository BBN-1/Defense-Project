describe("logged user access happy paths", () => {
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

    it("logged user should be able to see Logged user welcome msg in header", () => {
        cy.get('[data-cy="header-links-list"]').should(
            "contain",
            "Welcome, DEFAULT USER"
        );
    });

    it("logged user should be able to go to his Profile page by clicking on his username in the header", () => {
        cy.get('[data-cy="profile"]').click();
        cy.url().should("eq", "http://localhost:3000/profile");
        cy.get('[data-cy="profile-username"]').should(
            "contain",
            "Default User"
        );
        cy.get('[data-cy="profile-email"]').should("contain", "peter@abv.bg");
    });
});
