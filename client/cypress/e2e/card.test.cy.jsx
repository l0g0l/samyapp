/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});

describe("<Card/> ", () => {
    it("Display every elements into the card", () => {
        let time = 1500;
        cy.visit("http://localhost:3000/");
        cy.title().should("eq", "Catalogue of images");
        cy.get("[data-cy='favicon']")
            .and("have.attr", "href")
            .and("include", "logo.ico");

        cy.get("[data-cy='price']")
            .should("be.visible")
            .invoke("attr", "style", "borderLeft:white");
        cy.wait(time);
        cy.get("[data-cy='amount']").should("be.visible");
        cy.wait(time);
        cy.get("[data-cy='photo']").should("be.visible");
        cy.wait(time);
        cy.get("[data-cy='title']").should("be.visible");
        cy.wait(time);
        cy.get("[data-cy='subtitle']")
            .should("be.visible")
            .invoke("attr", "style", "color:grey-secondary");
        cy.wait(time);

        cy.get("[data-cy='footer']")
            .should("be.visible")
            .eq(0)
            .children("div")
            .eq(1)
            .children("div");
        cy.wait(time);
        cy.get(
            ":nth-child(1) > .c-card > [data-cy='footer'] > .c-card__counter-likes > #counterlikes"
        )
            .should("exist")
            .invoke("text")
            .should("match", /^[0-9]\d*(\.\d+)?$/);
        cy.get(
            "#root > main > ul > li:nth-child(1) > div > footer > div.c-card__counter-likes > button > img"
        )
            .should("be.visible")
            .then(() => {
                let counter =
                    ":nth-child(1) > .c-card > [data-cy='footer'] > .c-card__counter-likes > #counterlikes";
                if (counter.length < 0) {
                    cy.get("[data-cy='dislikeicon']").should("be.visible");
                }
            });
    });
});
