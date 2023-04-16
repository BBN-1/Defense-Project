describe("Register Page", () => {
    it("should register user correctly and redirect to correct page on app", () => {
        cy.visit("http://localhost:3000/register");

        //Please note that the email should be unique for each test run, otherwise the test will fail

        cy.get("[data-cy=username-container] > input").type("newUser1222");
        cy.get("[data-cy=email-container] > input").type("email@ne2wuser.bg");
        cy.get("[data-cy=password-container] > input").type("123456");
        cy.get("[data-cy=passConfirm-container] > input").type("123456");

        cy.get("[data-cy=submit]").click();

        cy.url().should("eq", "http://localhost:3000/");

        //check if the user is logged in and the correct username is displayed
        //username is displayed in the header and is all UPPERCASE
        
        cy.contains("Welcome, NEWUSER1222").should("be.visible");
    });
});
