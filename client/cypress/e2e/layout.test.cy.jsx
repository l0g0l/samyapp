/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});

describe("<Layout/> ", () => {
    it("Display every elements", () => {
        let time = 1500;
        cy.visit("http://localhost:3000/");
        cy.title().should("eq", "Catalogue of images");
        cy.get("[data-cy='favicon']")
            .and("have.attr", "href")
            .and("include", "logo.ico");

        cy.get("[data-cy='header']").should("be.visible");
        cy.wait(time);

        cy.get("[data-cy='cardlist']").should("be.visible");
        cy.wait(time);
    });
});
