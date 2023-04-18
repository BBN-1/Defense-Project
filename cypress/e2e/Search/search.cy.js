describe("Search functionality", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    })

    describe("Search functionality when there is an author who matches the search criteria", () => {
        it.only("should successfully find search button, click on it, then input search criteria into the pop up search bar, result should be one quote from searched author", () => {
            

            cy.get('[data-cy="search-button"]').click();
            cy.wait(150);
            cy.get('[data-cy="search-input"]').type("h");

            cy.wait(150);

            cy.get('[data-cy="search-input"]').type("a");
            cy.wait(150);

            cy.get('[data-cy="search-container"]').should("be.visible", {
                timeout: 100,
            });

            cy.get('[data-cy="search-container"]').should(
                "contain",
                "Haruki Murakami"
            );

            cy.get('[data-cy="search-container"]')
                .contains("Haruki Murakami")
                .click();
            cy.url().should(
                "eq",
                "http://localhost:3000/author/Haruki%20Murakami"
            );
        });
    });

    describe("Search functionality when no author matches the search criteria", () => {
        it.only("should show no result is there are no author's name that meet the search creteria", () => {
            

            cy.get('[data-cy="search-button"]').click();
            cy.wait(150);
            cy.get('[data-cy="search-input"]').type("v");

            cy.wait(150);

            cy.get('[data-cy="search-container"]')
                .children()
                .should("have.length", 0);
        });
    });
});
