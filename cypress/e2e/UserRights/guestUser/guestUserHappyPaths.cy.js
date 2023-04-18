describe("guest user access happy paths", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("guest user should be able to access main app page", () => {
        cy.url().should("eq", "http://localhost:3000/");
    });

    it("guest user should be able to see login link and access login page successfully ", () => {
        cy.contains("LOGIN").should("be.visible");
        cy.get('[data-cy="login"]').click();
        cy.url().should("eq", "http://localhost:3000/login");
    });

    it("guest user should be able to see register link and access register page successfully ", () => {
        cy.contains("REGISTER").should("be.visible");
        cy.get('[data-cy="register"]').click();
        cy.url().should("eq", "http://localhost:3000/register");
    });

    it("guest user should be able to see catalog link and access catalog page successfully ", () => {
        cy.contains("GET MOTIVATED!").should("be.visible");
        cy.get('[data-cy="catalog"]').click();
        cy.url().should("eq", "http://localhost:3000/catalog");
    });

    it("guest user should be able to see see details of a quote", () => {
        cy.contains("GET MOTIVATED!").should("be.visible");
        cy.get('[data-cy="catalog"]').click();
        cy.url().should("eq", "http://localhost:3000/catalog");
        cy.get(
            ':nth-child(1) > .CatalogItem_quote-bottom-wrapper__N1hh2 > [data-cy="details"]'
        ).click();

        cy.url().should("match", /\/catalog\/.+/);
    });

    it("guest user should be able to see search function and use it successfully ", () => {
        cy.contains("Search").should("be.visible");
        cy.get(".Search_header-searchBtn__vkiT-").click();
        cy.get('[data-cy="search-input"]')
            .type("search smth")
            .should("have.value", "search smth");
    });

    //not finished
    it("guest user should be able use the random quote feature on the main page", () => {
        cy.contains("Another One!").should("be.visible");
        cy.get('[data-cy="random-quote-text"]').click();
    });

    //not finished
    it("guest user should be able use the download quote feature on the main page", () => {
        cy.get('[data-cy="download-quote"]').should("be.visible");
        cy.get('[data-cy="download-quote"]').click();
    });
});
