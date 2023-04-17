describe("Create Page Unhappy Paths", () => {
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

            //then we try to create a new quote by submitting an empty form and check if the creation is unsuccessful

            cy.get("[data-cy=create]").click();
            cy.url().should("eq", "http://localhost:3000/create");

            cy.get("[data-cy=submit]").click();
            cy.get('[data-cy="quote-input"]')
                .invoke("prop", "validationMessage")
                .should("equal", "Please fill out this field.");
            cy.url().should("eq", "http://localhost:3000/create");
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

            //then we try to create a new quote by submitting form with empty quote field and check if the creation is unsuccessful

            cy.get("[data-cy=create]").click();
            cy.url().should("eq", "http://localhost:3000/create");

            cy.get("input").type("author");
            cy.get("[data-cy=submit]").click();
            cy.get('[data-cy="quote-input"]')
                .invoke("prop", "validationMessage")
                .should("equal", "Please fill out this field.");
            cy.url().should("eq", "http://localhost:3000/create");
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

            //then we try to create a new quote by submitting form with empty author field and check if the creation is unsuccessful

            cy.get("[data-cy=create]").click();
            cy.url().should("eq", "http://localhost:3000/create");

            cy.get("[data-cy=quote-input]").type("Test Quote 1234");
            cy.get("[data-cy=submit]").click();
            cy.get("input")
                .invoke("prop", "validationMessage")
                .should("equal", "Please fill out this field.");
            cy.url().should("eq", "http://localhost:3000/create");
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

            //then we try to create a new quote by submitting form with quote text less than 10 characters and check if the creation is unsuccessful

            cy.get("[data-cy=create]").click();
            cy.url().should("eq", "http://localhost:3000/create");

            cy.get("[data-cy=quote-input]").type("nine char");
            cy.get("input").type("author");
            cy.get("[data-cy=submit]").click();
            cy.on("window:alert", (message) => {
                expect(message).to.equal(
                    "Quote text must be at least 10 characters and less than 350!"
                );
            });
            cy.url().should("eq", "http://localhost:3000/create");
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

            //then we try to create a new quote by submitting form with quote text  more than 350 characters and check if the creation is unsuccessful

            cy.get("[data-cy=create]").click();
            cy.url().should("eq", "http://localhost:3000/create");
            cy.get("input").type("author");

            cy.get("[data-cy=quote-input]").type(
                "Character and word limits are quite common these days on the Internet. The one that most people are likely aware of is the 140 character limit for tweets on Twitter, but character limits aren't restricted to Twitter. There are limits for text messages (SMS), Yelp reviews, Facebook posts, Pinterest pins, Reddit titles and comments, eBay titles and descriptions as well as many others. Knowing these limits, as well as being able to see as you approach them, will enable you to better express yourself within the imposed limits."
            );
            
            cy.get('[data-cy="submit"]').click()

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

            //then we try to create a new quote by submitting form with author name that has numbers in it and check if the creation is unsuccessful

            cy.get("[data-cy=create]").click();
            cy.url().should("eq", "http://localhost:3000/create");

            cy.get("[data-cy=quote-input]").type("this will pass nicely");
            cy.get("input").type("author1");
            cy.get("input").blur();
            cy.contains(
                "Author's name must be in the format: 'John Doe' or 'John'!"
            ).should("be.visible");
            cy.url().should("eq", "http://localhost:3000/create");
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

            //then we try to create a new quote by submitting form with author name that has special characters in it and check if the creation is unsuccessful

            cy.get("[data-cy=create]").click();
            cy.url().should("eq", "http://localhost:3000/create");

            cy.get("[data-cy=quote-input]").type("this will pass nicely");
            cy.get("input").type("author&");
            cy.get("input").blur();
            cy.contains(
                "Author's name must be in the format: 'John Doe' or 'John'!"
            ).should("be.visible");
            cy.url().should("eq", "http://localhost:3000/create");
        });

        it("error message when author name has empty space before first name", () => {
            //first we login the user

            cy.get("[data-cy=email-container] > input").clear();
            cy.get("[data-cy=email-container] > input").type("peter@abv.bg");
            cy.get("[data-cy=password-container] > input").clear();
            cy.get("[data-cy=password-container] > input").type("123456");
            cy.get("[data-cy=submit]").click();
            cy.url().should("eq", "http://localhost:3000/catalog");
            cy.contains("Welcome, DEFAULT USER").should("be.visible");
            Cypress.config({ defaultCommandTimeout: 5000 });

            //then we try to create a new quote by submitting form with author name that has empty space before first name and check if the creation is unsuccessful

            cy.get("[data-cy=create]").click();
            cy.url().should("eq", "http://localhost:3000/create");

            cy.get("[data-cy=quote-input]").type("this will pass nicely");
            cy.get("input").type(" author");
            cy.get("input").blur();
            cy.contains(
                "Author's name must be in the format: 'John Doe' or 'John'!"
            ).should("be.visible");
            cy.url().should("eq", "http://localhost:3000/create");
        });

        it("error message when author name has empty space after first name", () => {
            //first we login the user

            cy.get("[data-cy=email-container] > input").clear();
            cy.get("[data-cy=email-container] > input").type("peter@abv.bg");
            cy.get("[data-cy=password-container] > input").clear();
            cy.get("[data-cy=password-container] > input").type("123456");
            cy.get("[data-cy=submit]").click();
            cy.url().should("eq", "http://localhost:3000/catalog");
            cy.contains("Welcome, DEFAULT USER").should("be.visible");
            Cypress.config({ defaultCommandTimeout: 5000 });

            //then we try to create a new quote by submitting form with author name that has empty space after first name and check if the creation is unsuccessful

            cy.get("[data-cy=create]").click();
            cy.url().should("eq", "http://localhost:3000/create");

            cy.get("[data-cy=quote-input]").type("this will pass nicely");
            cy.get("input").type("author ");
            cy.get("input").blur();
            cy.contains(
                "Author's name must be in the format: 'John Doe' or 'John'!"
            ).should("be.visible");
            cy.url().should("eq", "http://localhost:3000/create");
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

            //then we try to create a new quote by submitting form with author name that has empty space after last and check if the creation is unsuccessful

            cy.get("[data-cy=create]").click();
            cy.url().should("eq", "http://localhost:3000/create");

            cy.get("[data-cy=quote-input]").type("this will pass nicely");
            cy.get("input").type("author lastname ");
            cy.get("input").blur();
            cy.contains(
                "Author's name must be in the format: 'John Doe' or 'John'!"
            ).should("be.visible");
            cy.url().should("eq", "http://localhost:3000/create");
        });

        it("error message when author name has double empty space before last name", () => {
            //first we login the user

            cy.get("[data-cy=email-container] > input").clear();
            cy.get("[data-cy=email-container] > input").type("peter@abv.bg");
            cy.get("[data-cy=password-container] > input").clear();
            cy.get("[data-cy=password-container] > input").type("123456");
            cy.get("[data-cy=submit]").click();
            cy.url().should("eq", "http://localhost:3000/catalog");
            cy.contains("Welcome, DEFAULT USER").should("be.visible");
            Cypress.config({ defaultCommandTimeout: 5000 });

            //then we try to create a new quote by submitting form with author name that has double empty space before last and check if the creation is unsuccessful

            cy.get("[data-cy=create]").click();
            cy.url().should("eq", "http://localhost:3000/create");

            cy.get("[data-cy=quote-input]").type("this will pass nicely");
            cy.get("input").type("author  lastname ");
            cy.get("input").blur();
            cy.contains(
                "Author's name must be in the format: 'John Doe' or 'John'!"
            ).should("be.visible");
            cy.url().should("eq", "http://localhost:3000/create");
        });
    });
});
