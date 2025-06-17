# Getting Started

## Exercise Instructions

- Provide the following documentation with applicable examples:
  - How to get the latest code.
  - How to deploy it locally.
  - How to run the tests.

- Intended audience: new members of the team who will need to use your tests.
- The instructions will be used by the reviewer of your PR for completeness.

**Note:** Remove this section after completing the exercise.

## Purpose

spike-automation-exercise-main is a Typescript/Cypress-based automation suite written to validate the functionality of the automationexercise UI and API.

## Getting the Latest Code

1. Fork this repository
2. Clone this repository to your local device using the command ``` git clone <repository name> ```

## Setting Up the Environment

Provide instructions on how to set up the local environment, including any dependencies that need to be installed.

In order to run this suite locally, you will need the following:
- access to a CLI
- access to a text editor (e.g. VSCode)

You will also need the following dependencies:
- Node.js (instructions to install: https://nodejs.org/en/download)
- Cypress (https://www.cypress.io/)
- Faker (https://fakerjs.dev/guide/)
- Typescript (https://www.typescriptlang.org/download/)

## Running the Tests

The tests are split between two test files, that are named as shown:

- cypress/e2e/cartTests.cy.ts - all tests used to validate the online shopping functionality

- cypress/e2e/apiTests.cy.ts - all tests used to validate the API

you can set off an full run of the automation suite using the following command:
```npx cypress run```

specific test suites can also be run by specifying them in the command, for example:
```npx cypress run --spec "cypress/e2e/cartTests.cy.ts"```

you can also follow along with the tests' indivudual steps and their interactions with the UI by running
```npx cypress open```

from here, select E2E testing as your testing type and select the browser of your choice to open up a new window
(chrome is used for this example)

from here you will be presented with a list of specs, and you can select the .cy.ts file and follow along with the test cases

## Additional Details

Provide any other details you find pertinent, such as troubleshooting tips, common issues, or additional setup steps.

---

## Links

[README](README.md) | [EXERCISE](EXERCISE.md) | [ISSUES](ISSUES.md) | [FEEDBACK](FEEDBACK.md)