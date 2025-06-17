export class SignupPage {
    visit(): void {
        cy.visit('https://automationexercise.com/signup');
    }

    clickCreateAccountButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.contains('button', 'Create Account').click();
    }

    enterPasswordField(password: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('input[data-qa="password"]').type(password);
    }

    enterFirstNameField(firstName: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('input[data-qa="first_name"]').type(firstName);
    }

    enterLastNameField(lastName: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('input[data-qa="last_name"]').type(lastName);
    }

    enterAddressField(address: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('input[data-qa="address"]').type(address);
    }

    enterStateField(state: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('input[data-qa="state"]').type(state);
    }

    enterCityField(city: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('input[data-qa="city"]').type(city);
    }

    enterZipcodeField(zipcode: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('input[data-qa="zipcode"]').type(zipcode);
    }

    enterMobileField(mobile: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('input[data-qa="mobile_number"]').type(mobile);
    }

    verifyAccountCreated(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.contains('Account Created!').should('be.visible');
    }

    clickContinueButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.contains('a', 'Continue').click();
    }
}