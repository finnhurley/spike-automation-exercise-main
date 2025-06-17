export class ViewCartPage {
    visit(): void {
        cy.visit('https://automationexercise.com/view_cart');
    }

    clickProceedToCheckout(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.contains('a', 'Proceed To Checkout').click();
    }

    clickModalRegisterLogin(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#checkoutModal .modal-content').should('be.visible').find('a').contains('Register / Login').click({ force: true });
    }
}