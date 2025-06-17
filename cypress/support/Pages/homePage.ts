export class HomePage {
    visit(): void {
        cy.visit('http://automationexercise.com');
    }

    getIcon(): void {
        cy.get("img[alt='Website for automation practice']");
    }

    clickCartButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.contains('a', 'Cart').click(); 
    }

    clickSignUpLoginButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.contains('a', ' Signup / Login').click();
    }

    checkIfLoggedIn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.contains('a', 'Logged in as').should('be.visible');
    }
}