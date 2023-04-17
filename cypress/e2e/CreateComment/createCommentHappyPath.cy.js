describe("Comment Page Happy Path", () => {
    it("should successfully create new comment with displayed username", () => {
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
        cy.get("[data-cy=quote-input]").type("Test Quote ccc");
        cy.get("input").type("author");
        cy.get("[data-cy=submit]").click();
        cy.url().should("eq", "http://localhost:3000/catalog");
        cy.contains("Test Quote ccc").should("be.visible");
        cy.contains("author").should("be.visible");

        //then we navigate to quote details of teh quote we just created and check if the navigation is successful

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
        cy.contains("Test Quote ccc").should("be.visible");
        cy.contains("author").should("be.visible");
        cy.contains("Edit").should("be.visible");

        //then we create a new comment for the quote and check if the creation is successful

        cy.get('[data-cy="comment-textarea"]').type("this is a test comment");
        cy.get('[data-cy="comment-submit-btn"]').click();
        cy.contains("this is a test comment").should("be.visible");
    });


    it("should successfully create new comment with hidden username", () => {
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
        cy.get("[data-cy=quote-input]").type("Test Quote ccc");
        cy.get("input").type("author");
        cy.get("[data-cy=submit]").click();
        cy.url().should("eq", "http://localhost:3000/catalog");
        cy.contains("Test Quote ccc").should("be.visible");
        cy.contains("author").should("be.visible");

        //then we navigate to quote details of teh quote we just created and check if the navigation is successful

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
        cy.contains("Test Quote ccc").should("be.visible");
        cy.contains("author").should("be.visible");
        cy.contains("Edit").should("be.visible");

        //then we anonymously create a new comment for the quote and check if the creation is successful and username is hidden

        cy.get('[data-cy="comment-textarea"]').type("this is a test comment with hidden username");
        cy.get('[data-cy="anonymous-checkbox"]').click();
        cy.get('[data-cy="comment-submit-btn"]').click();
        cy.contains('by - Anonymous').should('be.visible');
        cy.get('[data-cy="comment"]').children().should('contain', 'by - Anonymous').and('contain', 'this is a test comment with hidden username')
       

    });



});
