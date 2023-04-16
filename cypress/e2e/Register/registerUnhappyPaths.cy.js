describe("Register Page", () => {
    it("should show validation errors and not register on empty/wrong input", () => {
        cy.visit("http://localhost:3000/register");

        //check form submit with empty input fields, only user interraction is register click

        cy.get("[data-cy=submit]").click();

        cy.get("[data-cy=username-container] > input")
            .invoke("prop", "validationMessage")
            .should("equal", "Please fill out this field.");
        cy.url().should("eq", "http://localhost:3000/register");

        //check username validation error #1 with less than 3 characters

        cy.get("[data-cy=username-container] > input").type("us");
        cy.get("[data-cy=username-container] > input").blur()
        cy.contains(
            "Username must be between 3 and 12 characters long and can contain only letters, numbers and underscore!"
        ).should("be.visible");

        //check username validation error #2 with more thab 12 characters
        cy.get("[data-cy=username-container] > input").clear();

        cy.get("[data-cy=username-container] > input").type("yellowjackets");
        cy.get("[data-cy=username-container] > input").blur()
        cy.contains(
            "Username must be between 3 and 12 characters long and can contain only letters, numbers and underscore!"
        ).should("be.visible");

        //check email validation error with invalid email #1

        cy.get("[data-cy=email-container] > input").type("notanemail");
        cy.get("[data-cy=email-container] > input").blur()
        cy.contains("Email must be valid!").should("be.visible");

        //check email validation error with invalid email #2

        cy.get("[data-cy=email-container] > input").clear();
        cy.get("[data-cy=email-container] > input").type("notanemail@");
        cy.get("[data-cy=email-container] > input").blur()
        cy.contains("Email must be valid!").should("be.visible");

        //check email validation error with invalid email #3

        cy.get("[data-cy=email-container] > input").clear();
        cy.get("[data-cy=email-container] > input").type("notanemail@vf");
        cy.get("[data-cy=email-container] > input").blur()
        cy.contains("Email must be valid!").should("be.visible");

        //check password validation error #1 with bellow 6 characters

        cy.get("[data-cy=password-container] > input").type("12345");
        cy.get("[data-cy=password-container] > input").blur()
        cy.contains( "The password must be between 6 and 12 characters long!").should("be.visible");

        //check password validation error #2 with above 12 characters

        cy.get("[data-cy=password-container] > input").clear();
        cy.get("[data-cy=password-container] > input").type("1234567890123");
        cy.get("[data-cy=password-container] > input").blur()
        cy.contains( "The password must be between 6 and 12 characters long!").should("be.visible");

        //check pass confirmation validation error #1 with different invalid (shorter)  passwords

        cy.get("[data-cy=password-container] > input").clear()
        cy.get("[data-cy=password-container] > input").type("12345");
        cy.get("[data-cy=passConfirm-container] > input").type("12344");
        cy.get("[data-cy=passConfirm-container] > input").blur()
        cy.contains( "Passwords must match!").should("be.visible");
        cy.contains( "The password must be between 6 and 12 characters long!").should("be.visible");

         //check pass confirmation validation error #2 with different invalid (longer)  passwords

          cy.get("[data-cy=password-container] > input").clear()
          cy.get("[data-cy=password-container] > input").type("1234567890123");
          cy.get("[data-cy=passConfirm-container] > input").clear()
          cy.get("[data-cy=passConfirm-container] > input").type("1234567890124");
          cy.get("[data-cy=passConfirm-container] > input").blur()
          cy.contains( "Passwords must match!").should("be.visible");
          cy.contains( "The password must be between 6 and 12 characters long!").should("be.visible");

          //check error message on submit with email already in use 

            cy.get("[data-cy=username-container] > input").clear()
            cy.get("[data-cy=username-container] > input").type("peter");
            cy.get("[data-cy=email-container] > input").clear()
            cy.get("[data-cy=email-container] > input").type("peter@abv.bg")
            cy.get("[data-cy=password-container] > input").clear()
            cy.get("[data-cy=password-container] > input").type("123456");
            cy.get("[data-cy=passConfirm-container] > input").clear()
            cy.get("[data-cy=passConfirm-container] > input").type("123456");
            cy.get("[data-cy=submit]").click();
            cy.contains("User with this peter@abv.bg email already exists!").should("be.visible");
            cy.url().should("eq", "http://localhost:3000/register");





    });
});
