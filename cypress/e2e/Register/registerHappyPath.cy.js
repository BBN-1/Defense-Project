describe("Register Page Happy Path", () => {
    it("should register user correctly and redirect to home page", () => {
        cy.visit("http://localhost:3000/register");

        //Please note that the email should be unique for each test run, otherwise the test will fail

        cy.get("[data-cy=username-container] > input").type("testME1234");
        cy.get("[data-cy=email-container] > input").type("email@11w.bg");
        cy.get("[data-cy=password-container] > input").type("123456");
        cy.get("[data-cy=passConfirm-container] > input").type("123456");

        cy.get("[data-cy=submit]").click();

        cy.url().should("eq", "http://localhost:3000/");

        //check if the user is logged in and the correct username is displayed
        //username is displayed in the header and is all UPPERCASE

        cy.contains("Welcome, TESTME1234").should("be.visible");
    });
});
