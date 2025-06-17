export class LoginPage {
    visit(): void {
        cy.visit('https://automationexercise.com/login');
    }

    typeSignupNameField(name: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('input[name="name"]').type(name);
    }

    typeSignUpEmailField(email: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('input[data-qa="signup-email"]').type(email);
    }

    clickSignUpButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.contains('button', 'Signup').click();
    }
}