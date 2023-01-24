/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});

describe("<Header/> ", () => {
    it("Show logo and input search", () => {
        let time = 1500;
        cy.visit("http://localhost:3000/");
        cy.title().should("eq", "Catalogue of images");
        cy.get("[data-cy='favicon']")
            .and("have.attr", "href")
            .and("include", "logo.ico");

        cy.get("[data-cy='logo']").should("be.visible");
        cy.wait(time);

        cy.get("[data-cy='inputsearch']").should("be.visible");
        cy.wait(time);
        cy.get('[placeholder="You\'re looking for something?"]').should(
            "be.visible"
        );
        cy.wait(time);
        cy.get("input[type='search']")
            .should("be.visible")
            .type("beach {enter}");
        cy.wait(time);
    });
});
