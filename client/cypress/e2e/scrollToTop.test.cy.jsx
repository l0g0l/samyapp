/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});

describe("<ScrollToTop/> ", () => {
    it("Displays the icon and scrolls you to the top", () => {
        let time = 1500;
        cy.visit("http://localhost:3000/");
        cy.title().should("eq", "Catalogue of images");
        cy.get("[data-cy='favicon']")
            .and("have.attr", "href")
            .and("include", "logo.ico");

        cy.get("[data-cy='scrolltotop']").click({ force: true });
    });
});
