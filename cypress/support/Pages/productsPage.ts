export class ProductsPage {
    visit(): void {
        cy.visit('https://automationexercise.com/products');
    }

    addFirstItemToCart(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('.product-overlay').first().find('.add-to-cart').click({ force: true });
    }

    clickModalViewCart(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#cartModal .modal-content').should('be.visible').contains('View Cart').click();
    }
}