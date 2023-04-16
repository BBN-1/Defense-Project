describe("Login Page Unhappy Paths", () => {
    describe("Submit Login Form with incorrect input", () => {
        beforeEach(() => {
            cy.visit("http://localhost:3000/login");
        });

        it("should show validation error on submit with all inputs empty ", () => {
            cy.get("[data-cy=submit]").click();

            cy.get("[data-cy=email-container] > input")
                .invoke("prop", "validationMessage")
                .should("equal", "Please fill out this field.");
            cy.url().should("eq", "http://localhost:3000/login");
        });

        it("should show error message on submit with incorrect email", () => {
            cy.get("[data-cy=email-container] > input").clear();
            cy.get("[data-cy=email-container] > input").type(
                "doesnotexist@app.com"
            );
            cy.get("[data-cy=password-container] > input").clear();
            cy.get("[data-cy=password-container] > input").type("123456");
            cy.get("[data-cy=submit]").click();
            cy.contains(
                "We could not find a user with the email and password combination you entered. Please check that the email and password you entered are correct and try again."
            ).should("be.visible");
        });

        it("should show error message on submit with incorrect password", () => {
            cy.get("[data-cy=email-container] > input").clear();
            cy.get("[data-cy=email-container] > input").type("peter@abv.bg");
            cy.get("[data-cy=password-container] > input").clear();
            cy.get("[data-cy=password-container] > input").type("123457");
            cy.get("[data-cy=submit]").click();
            cy.contains(
                "We could not find a user with the email and password combination you entered. Please check that the email and password you entered are correct and try again."
            ).should("be.visible");
        });
    });


    describe("Show input validation errors on blur", () => {

      beforeEach(() => {
        cy.visit("http://localhost:3000/login");
      })

      it("email validation error with invalid email #1", () => {
        cy.get("[data-cy=email-container] > input").type("notanemail");
        cy.get("[data-cy=email-container] > input").blur();
        cy.contains("Email must be valid!").should("be.visible");
    })

    it("email validation error with invalid email #2", () => {
        cy.get("[data-cy=email-container] > input").clear();
        cy.get("[data-cy=email-container] > input").type("notanemail@");
        cy.get("[data-cy=email-container] > input").blur();
        cy.contains("Email must be valid!").should("be.visible");
    })

    it("email validation error with invalid email #3", () => {
        cy.get("[data-cy=email-container] > input").clear();
        cy.get("[data-cy=email-container] > input").type("notanemail@vf");
        cy.get("[data-cy=email-container] > input").blur();
        cy.contains("Email must be valid!").should("be.visible");
    })

    it("password validation error with less than 6 characters", () => {
      cy.get("[data-cy=password-container] > input").type("12345");
      cy.get("[data-cy=password-container] > input").blur();
      cy.contains("The password must be between 6 and 12 characters long!").should("be.visible");
  })

  it("password validation error with more than 12 characters", () => {
      cy.get("[data-cy=password-container] > input").clear();
      cy.get("[data-cy=password-container] > input").type("1234567890123");
      cy.get("[data-cy=password-container] > input").blur();
      cy.contains("The password must be between 6 and 12 characters long!").should("be.visible");
  })



    })
});
