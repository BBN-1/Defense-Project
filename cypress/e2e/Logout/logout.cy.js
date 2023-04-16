describe("Logout functionality", () => {

    it("should logout user correctly and navigate to home page", () => {

        //first we login the user
        
        cy.visit("http://localhost:3000/login");

        cy.get("[data-cy=email-container] > input").clear();
        cy.get("[data-cy=email-container] > input").type("peter@abv.bg");
        cy.get("[data-cy=password-container] > input").clear();
        cy.get("[data-cy=password-container] > input").type("123456");
        cy.get("[data-cy=submit]").click();
        cy.url().should("eq", "http://localhost:3000/catalog");
        cy.contains("Welcome, DEFAULT USER").should("be.visible");
        Cypress.config({defaultCommandTimeout: 5000});

        //then we logout the user and check if the logout is successful

        cy.get("[data-cy=logout]").click();
        cy.url().should("eq", "http://localhost:3000/");
        cy.contains("REGISTER").should("be.visible");
        cy.contains("LOGIN").should("be.visible");
       


    });
});
