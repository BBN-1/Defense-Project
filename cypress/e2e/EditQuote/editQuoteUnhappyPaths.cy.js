describe("Edit Quote Page Unhappy Paths", () => {
    describe("Check if error msg is displayed on empty fields", () => {
        beforeEach(() => {
            cy.visit("http://localhost:3000/login");
        });

        it("should show error message when user tries to submit with all empty fields", () => {
            //first we login the user

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
            cy.get("[data-cy=quote-input]").type("this better works test2");
            cy.get("input").type("author");
            cy.get("[data-cy=submit]").click();
            cy.url().should("eq", "http://localhost:3000/catalog");
            cy.contains("this better works test2").should("be.visible");
            cy.contains("author").should("be.visible");

            //then we go to navigate to quote details page by clicking on the detail button and check if the quote is there and the edit button is visible

            cy.get(
                ':nth-child(1) > .CatalogItem_quote-bottom-wrapper__N1hh2 > [data-cy="details"]'
            ).click();
            cy.url().should("contain", "catalog");
            cy.contains("this better works test2").should("be.visible");
            cy.contains("author").should("be.visible");
            cy.contains("Edit").should("be.visible");

            //then we click on the edit button and check if the edit page is loaded and the right quote is there

            cy.get('[data-cy="edit-link"]').click();
            cy.url().should("contain", "edit", "quote");
            cy.contains("this better works test2").should("be.visible");
            cy.get("input").should("have.value", "author");

            //then we clear all field and try to submit the form and check if the error message is displayed

            cy.get('[data-cy="quote-input"]').clear();
            cy.get("input").clear();
            cy.get('[data-cy="edit-btn"]').click();
            cy.contains(
                "Author's name must be in the format: 'John Doe' or 'John'!"
            ).should("be.visible");
        });

        it("should show error message when user tries to submit with empty quote field", () => {
            //first we login the user

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
            cy.get("[data-cy=quote-input]").type("this better works test2");
            cy.get("input").type("author");
            cy.get("[data-cy=submit]").click();
            cy.url().should("eq", "http://localhost:3000/catalog");
            cy.contains("this better works test2").should("be.visible");
            cy.contains("author").should("be.visible");

            //then we go to navigate to quote details page by clicking on the detail button and check if the quote is there and the edit button is visible

            cy.get(
                ':nth-child(1) > .CatalogItem_quote-bottom-wrapper__N1hh2 > [data-cy="details"]'
            ).click();
            cy.url().should("contain", "catalog");
            cy.contains("this better works test2").should("be.visible");
            cy.contains("author").should("be.visible");
            cy.contains("Edit").should("be.visible");

            //then we click on the edit button and check if the edit page is loaded and the right quote is there

            cy.get('[data-cy="edit-link"]').click();
            cy.url().should("contain", "edit", "quote");
            cy.contains("this better works test2").should("be.visible");
            cy.get("input").should("have.value", "author");

            //then we try to submit with empty quote field and check if the error message is displayed

            cy.get('[data-cy="quote-input"]').clear();
            cy.get('[data-cy="edit-btn"]').click();
            cy.on("window:alert", (message) => {
                expect(message).to.equal(
                    "Quote text must be at least 10 characters!"
                );
            });
            cy.url().should("contain", "edit", "quote");
        });

        it("should show error message when user tries to submit with empty author field", () => {
            //first we login the user

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
            cy.get("[data-cy=quote-input]").type("this better works test2");
            cy.get("input").type("author");
            cy.get("[data-cy=submit]").click();
            cy.url().should("eq", "http://localhost:3000/catalog");
            cy.contains("this better works test2").should("be.visible");
            cy.contains("author").should("be.visible");

            //then we go to navigate to quote details page by clicking on the detail button and check if the quote is there and the edit button is visible

            cy.get(
                ':nth-child(1) > .CatalogItem_quote-bottom-wrapper__N1hh2 > [data-cy="details"]'
            ).click();
            cy.url().should("contain", "catalog");
            cy.contains("this better works test2").should("be.visible");
            cy.contains("author").should("be.visible");
            cy.contains("Edit").should("be.visible");

            //then we click on the edit button and check if the edit page is loaded and the right quote is there

            cy.get('[data-cy="edit-link"]').click();
            cy.url().should("contain", "edit", "quote");
            cy.contains("this better works test2").should("be.visible");
            cy.get("input").should("have.value", "author");

            //then we try to submit with empty author field and check if the error message is displayed

            cy.get("input").clear();
            cy.get('[data-cy="edit-btn"]').click();
            cy.contains(
                "Author's name must be in the format: 'John Doe' or 'John'!"
            ).should("be.visible");
            cy.url().should("contain", "edit", "quote");
        });
    });

    describe("Check if error msg is displayed on invalid fields", () => {
        beforeEach(() => {
            cy.visit("http://localhost:3000/login");
        });

        it("error message when quote text is less than 10 characters", () => {
            //first we login the user

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
            cy.get("[data-cy=quote-input]").type("this better works test2");
            cy.get("input").type("author");
            cy.get("[data-cy=submit]").click();
            cy.url().should("eq", "http://localhost:3000/catalog");
            cy.contains("this better works test2").should("be.visible");
            cy.contains("author").should("be.visible");

            //then we go to navigate to quote details page by clicking on the detail button and check if the quote is there and the edit button is visible

            cy.get(
                ':nth-child(1) > .CatalogItem_quote-bottom-wrapper__N1hh2 > [data-cy="details"]'
            ).click();
            cy.url().should("contain", "catalog");
            cy.contains("this better works test2").should("be.visible");
            cy.contains("author").should("be.visible");
            cy.contains("Edit").should("be.visible");

            //then we click on the edit button and check if the edit page is loaded and the right quote is there

            cy.get('[data-cy="edit-link"]').click();
            cy.url().should("contain", "edit", "quote");
            cy.contains("this better works test2").should("be.visible");
            cy.get("input").should("have.value", "author");

            //then we edit and try to submit the form with text less tha 10 characters and check if the error message is displayed

            cy.get('[data-cy="quote-input"]').clear();
            cy.get('[data-cy="quote-input"]').type("need more");

            cy.get('[data-cy="edit-btn"]').click();
            cy.on("window:alert", (message) => {
                expect(message).to.equal(
                    "Quote text must be at least 10 characters!"
                );
            });
            cy.url().should("contain", "edit", "quote");
        });

        it("error message when quote text is more than 350 characters", () => {
            //first we login the user

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
            cy.get("[data-cy=quote-input]").type("this better works test2");
            cy.get("input").type("author");
            cy.get("[data-cy=submit]").click();
            cy.url().should("eq", "http://localhost:3000/catalog");
            cy.contains("this better works test2").should("be.visible");
            cy.contains("author").should("be.visible");

            //then we go to navigate to quote details page by clicking on the detail button and check if the quote is there and the edit button is visible

            cy.get(
                ':nth-child(1) > .CatalogItem_quote-bottom-wrapper__N1hh2 > [data-cy="details"]'
            ).click();
            cy.url().should("contain", "catalog");
            cy.contains("this better works test2").should("be.visible");
            cy.contains("author").should("be.visible");
            cy.contains("Edit").should("be.visible");

            //then we click on the edit button and check if the edit page is loaded and the right quote is there

            cy.get('[data-cy="edit-link"]').click();
            cy.url().should("contain", "edit", "quote");
            cy.contains("this better works test2").should("be.visible");
            cy.get("input").should("have.value", "author");

            //then we try to create a new quote by submitting form with quote text more than 350 characters and check if the creation is unsuccessful

            cy.get('[data-cy="quote-input"]').clear();
            cy.get('[data-cy="quote-input"]').type(
                "this will be more than 350 this will be more than 350this will be more than 350this will be more than 350this will be more than 350this will be more than 350this will be more than 350this will be more than 350this will be more than 350this will be more than 350this will be more than 350this will be more than 350this will be more than 350td dkjhjd kje"
            );

            cy.get('[data-cy="edit-btn"]').click();

            cy.on("window:alert", (message) => {
                expect(message).to.equal(
                    "Quote text must be less than 350 characters!"
                );
            });
        });

        it("error message when author name has numbers in it", () => {
            //first we login the user

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
            cy.get("[data-cy=quote-input]").type("this better works test2");
            cy.get("input").type("author");
            cy.get("[data-cy=submit]").click();
            cy.url().should("eq", "http://localhost:3000/catalog");
            cy.contains("this better works test2").should("be.visible");
            cy.contains("author").should("be.visible");

            //then we go to navigate to quote details page by clicking on the detail button and check if the quote is there and the edit button is visible

            cy.get(
                ':nth-child(1) > .CatalogItem_quote-bottom-wrapper__N1hh2 > [data-cy="details"]'
            ).click();
            cy.url().should("contain", "catalog");
            cy.contains("this better works test2").should("be.visible");
            cy.contains("author").should("be.visible");
            cy.contains("Edit").should("be.visible");

            //then we click on the edit button and check if the edit page is loaded and the right quote is there

            cy.get('[data-cy="edit-link"]').click();
            cy.url().should("contain", "edit", "quote");
            cy.contains("this better works test2").should("be.visible");
            cy.get("input").should("have.value", "author");

            //then we try to create a new quote by submitting form with author name with numbers in it and check if the creation is unsuccessful and we are on teh same page

            cy.get("input").clear();
            cy.get("input").type("author123");
            cy.get('[data-cy="quote-input"]').clear();
            cy.get('[data-cy="quote-input"]').type(
                "this will be more than 350 this will be more than 350this will be more than 350this will be more than 350this will be more "
            );

            cy.url().then((currentUrl) => {
                cy.get('[data-cy="edit-btn"]').click();
                cy.url().should("equal", currentUrl);
            });
        });

        it("error message when author name has special characters in it", () => {
            //first we login the user

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
            cy.get("[data-cy=quote-input]").type("this better works test2");
            cy.get("input").type("author");
            cy.get("[data-cy=submit]").click();
            cy.url().should("eq", "http://localhost:3000/catalog");
            cy.contains("this better works test2").should("be.visible");
            cy.contains("author").should("be.visible");

            //then we go to navigate to quote details page by clicking on the detail button and check if the quote is there and the edit button is visible

            cy.get(
                ':nth-child(1) > .CatalogItem_quote-bottom-wrapper__N1hh2 > [data-cy="details"]'
            ).click();
            cy.url().should("contain", "catalog");
            cy.contains("this better works test2").should("be.visible");
            cy.contains("author").should("be.visible");
            cy.contains("Edit").should("be.visible");

            //then we click on the edit button and check if the edit page is loaded and the right quote is there

            cy.get('[data-cy="edit-link"]').click();
            cy.url().should("contain", "edit", "quote");
            cy.contains("this better works test2").should("be.visible");
            cy.get("input").should("have.value", "author");

            //then we try to create a new quote by submitting form with author name with special character in it and check if the creation is unsuccessful and we are on teh same page

            cy.get("input").clear();
            cy.get("input").type("author&");
            cy.get('[data-cy="quote-input"]').clear();
            cy.get('[data-cy="quote-input"]').type(
                "this will be more than 350 this will be more than 350this will be more than 350this will be more than 350this will be more "
            );

            cy.url().then((currentUrl) => {
                cy.get('[data-cy="edit-btn"]').click();
                cy.url().should("equal", currentUrl);
            });
        });

        it("error message when author name has empty space at the start", () => {
            //first we login the user

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
            cy.get("[data-cy=quote-input]").type("this better works test2");
            cy.get("input").type("author");
            cy.get("[data-cy=submit]").click();
            cy.url().should("eq", "http://localhost:3000/catalog");
            cy.contains("this better works test2").should("be.visible");
            cy.contains("author").should("be.visible");

            //then we go to navigate to quote details page by clicking on the detail button and check if the quote is there and the edit button is visible

            cy.get(
                ':nth-child(1) > .CatalogItem_quote-bottom-wrapper__N1hh2 > [data-cy="details"]'
            ).click();
            cy.url().should("contain", "catalog");
            cy.contains("this better works test2").should("be.visible");
            cy.contains("author").should("be.visible");
            cy.contains("Edit").should("be.visible");

            //then we click on the edit button and check if the edit page is loaded and the right quote is there

            cy.get('[data-cy="edit-link"]').click();
            cy.url().should("contain", "edit", "quote");
            cy.contains("this better works test2").should("be.visible");
            cy.get("input").should("have.value", "author");

            //then we try to create a new quote by submitting form with author name with emprty space at the start and check if the creation is unsuccessful and we are on teh same page

            cy.get("input").clear();
            cy.get("input").type(" author");
            cy.get('[data-cy="quote-input"]').clear();
            cy.get('[data-cy="quote-input"]').type(
                "this will be more than 350 this will be more than 350this will be more than 350this will be more than 350this will be more "
            );

            cy.url().then((currentUrl) => {
                cy.get('[data-cy="edit-btn"]').click();
                cy.url().should("equal", currentUrl);
            });
        });

        it("error message when author name that has two empty spaces between first and last name", () => {
            //first we login the user

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
            cy.get("[data-cy=quote-input]").type("this better works test2");
            cy.get("input").type("author");
            cy.get("[data-cy=submit]").click();
            cy.url().should("eq", "http://localhost:3000/catalog");
            cy.contains("this better works test2").should("be.visible");
            cy.contains("author").should("be.visible");

            //then we go to navigate to quote details page by clicking on the detail button and check if the quote is there and the edit button is visible

            cy.get(
                ':nth-child(1) > .CatalogItem_quote-bottom-wrapper__N1hh2 > [data-cy="details"]'
            ).click();
            cy.url().should("contain", "catalog");
            cy.contains("this better works test2").should("be.visible");
            cy.contains("author").should("be.visible");
            cy.contains("Edit").should("be.visible");

            //then we click on the edit button and check if the edit page is loaded and the right quote is there

            cy.get('[data-cy="edit-link"]').click();
            cy.url().should("contain", "edit", "quote");
            cy.contains("this better works test2").should("be.visible");
            cy.get("input").should("have.value", "author");

            //then we try to create a new quote by submitting form with author name with numbers in it and check if the creation is unsuccessful and we are on teh same page

            cy.get("input").clear();
            cy.get("input").type("first  lastname");
            cy.get('[data-cy="quote-input"]').clear();
            cy.get('[data-cy="quote-input"]').type(
                "this will be more than 350 this will be more than 350this will be more than 350this will be more than 350this will be more "
            );

            cy.url().then((currentUrl) => {
                cy.get('[data-cy="edit-btn"]').click();
                cy.url().should("equal", currentUrl);
            });
        });

        it("error message when author name has empty space after last name", () => {
            //first we login the user

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
            cy.get("[data-cy=quote-input]").type("this better works test2");
            cy.get("input").type("author");
            cy.get("[data-cy=submit]").click();
            cy.url().should("eq", "http://localhost:3000/catalog");
            cy.contains("this better works test2").should("be.visible");
            cy.contains("author").should("be.visible");

            //then we go to navigate to quote details page by clicking on the detail button and check if the quote is there and the edit button is visible

            cy.get(
                ':nth-child(1) > .CatalogItem_quote-bottom-wrapper__N1hh2 > [data-cy="details"]'
            ).click();
            cy.url().should("contain", "catalog");
            cy.contains("this better works test2").should("be.visible");
            cy.contains("author").should("be.visible");
            cy.contains("Edit").should("be.visible");

            //then we click on the edit button and check if the edit page is loaded and the right quote is there

            cy.get('[data-cy="edit-link"]').click();
            cy.url().should("contain", "edit", "quote");
            cy.contains("this better works test2").should("be.visible");
            cy.get("input").should("have.value", "author");

            //then we try to create a new quote by submitting form with author name with empty space after last name and check if the creation is unsuccessful and we are on teh same page

            cy.get("input").clear();
            cy.get("input").type("first lastname ");
            cy.get('[data-cy="quote-input"]').clear();
            cy.get('[data-cy="quote-input"]').type(
                "this will be more than 350 this will be more than 350this will be more than 350this will be more than 350this will be more "
            );

            cy.url().then((currentUrl) => {
                cy.get('[data-cy="edit-btn"]').click();
                cy.url().should("equal", currentUrl);
            });
        });



      
    });
});
