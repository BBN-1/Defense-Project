describe("Comment Page Unhappy Path", () => {
    it("should check if error msg will be displayed on if comment that is more than 200 characters is being input", () => {
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
        cy.get("[data-cy=quote-input]").type("Test Quote fcc");
        cy.get("input").type("author");
        cy.get("[data-cy=submit]").click();
        cy.url().should("eq", "http://localhost:3000/catalog");
        cy.contains("Test Quote fcc").should("be.visible");
        cy.contains("author").should("be.visible");

        //then we navigate to quote details of the quote we just created and check if the navigation is successful

        cy.get(
            ':nth-child(1) > .CatalogItem_quote-bottom-wrapper__N1hh2 > [data-cy="details"]'
        )
            .should("have.attr", "href")
            .then((href) => {
                const linkAddress = href.split("/")[2];

                cy.get(
                    ':nth-child(1) > .CatalogItem_quote-bottom-wrapper__N1hh2 > [data-cy="details"]'
                ).click();
                cy.url().should("include", linkAddress);
            });
        cy.url().should("contain", "catalog");
        cy.contains("Test Quote fcc").should("be.visible");
        cy.contains("author").should("be.visible");
        cy.contains("Edit").should("be.visible");

        //then we create a new comment with more than 200 characters and check if alert msg will be displayed

        cy.get('[data-cy="comment-textarea"]').type("Comment must be less than 200 characters!Comment must be less than 200 characters!Comment must be less than 200 characters!Comment must be less than 200 characters!Comment must be less than 200 charact");
        
        
        cy.on("window:alert", (message) => {
            expect(message).to.equal(
                "Comment must be less than 200 characters!"
            );
        });

       
    });
});
