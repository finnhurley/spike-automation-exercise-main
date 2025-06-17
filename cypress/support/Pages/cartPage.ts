export class CartPage {
    visit(): void {
        cy.visit('https://automationexercise.com/view_cart')
    }

    cartPageEmptyMessage(): void {
        cy.contains('p', 'Cart is empty').should('be.visible'); 
    }

    clickHereLink(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.contains('a', 'here').click();
    }

    clickProceedToCheckout(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.contains('a', 'Proceed To Checkout').click();
    }
}