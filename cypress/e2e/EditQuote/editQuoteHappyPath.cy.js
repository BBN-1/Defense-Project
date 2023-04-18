describe("Edit Quote Page Happy Path", () => {
    it("should successfully edit already existing quote and navigate to quote page", () => {
        //first we login the user
        cy.visit("http://localhost:3000/login");

        cy.get("[data-cy=email-container] > input").clear();
        cy.get("[data-cy=email-container] > input").type("peter@abv.bg");
        cy.get("[data-cy=password-container] > input").clear();
        cy.get("[data-cy=password-container] > input").type("123456");
        cy.get("[data-cy=submit]").click();
        cy.url().should("eq", "http://localhost:3000/catalog");
        cy.contains("Welcome, DEFAULT USER").should("be.visible");
        Cypress.config({ defaultCommandTimeout: 5000 });

        //then we create a new quote and check if the creation is successful

        cy.get("[data-cy=create]").click();
        cy.url().should("eq", "http://localhost:3000/create");
        cy.get("[data-cy=quote-input]").type("this better works 2666");
        cy.get("input").type("author");
        cy.get("[data-cy=submit]").click();
        cy.url().should("eq", "http://localhost:3000/catalog");
        cy.contains("this better works 2666").should("be.visible");
        cy.contains("author").should("be.visible");

        //then we go to navigate to quote details page by clicking on the detail button and check if the quote is there and the edit button is visible

        cy.get(
            ':nth-child(1) > .CatalogItem_quote-bottom-wrapper__N1hh2 > [data-cy="details"]'
        ).click();
        cy.url().should("contain", "catalog");
        cy.contains("this better works 2666").should("be.visible");
        cy.contains("author").should("be.visible");
        cy.contains("Edit").should("be.visible");

        //then we click on the edit button and check if the edit page is loaded and the right quote is there

        cy.get('[data-cy="edit-link"]').click();
        cy.url().should("contain", "edit", "quote");
        cy.contains("this better works 2666").should("be.visible");
        cy.get("input").should("have.value", "author");

        //then we edit the quote take the quoteId from url and submit the form

        cy.get('[data-cy="quote-input"]').clear();
        cy.get('[data-cy="quote-input"]').type("edit is successful");
        const quoteId = cy.url().then((url) => url.split("/")[3]);
        cy.get('[data-cy="edit-btn"]').click();

        //then we check if we are correctly redirected to the quote details page and the quote is edited

        cy.url().should("contain", "catalog", quoteId);
        cy.contains("edit is successful").should("be.visible");
        cy.contains("author").should("be.visible");
    });
});
