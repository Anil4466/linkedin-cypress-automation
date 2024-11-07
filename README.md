# LinkedIn Cypress Automation

## Overview
This project is an automated testing suite for the LinkedIn login page, built using **Cypress**. The tests verify different login scenarios, such as valid logins, invalid logins, and the presence of required elements on the page. It leverages the **Page Object Model** (POM) design pattern for maintainability and scalability.

## Features
- Automates LinkedIn login page functionality.
- Tests both valid and invalid login attempts.
- Checks for correct error handling and user interface elements.
- Uses Page Object Model (POM) for easier maintenance of test scripts.

## Project Structure
- `cypress/`
  - `e2e/`: Contains the test cases for the login functionality.
    - `login/`
      - `linkedinLogin.spec.js`: Contains the test cases for login validation.
  - `fixtures/`: Contains mock data for testing.
    - `loginData.json`: Sample login data for the tests.
  - `support/`
    - `pageObjects/`
      - `linkedinLoginPage.js`: Page object for the LinkedIn login page.
    - `commands.js`: Custom commands used throughout the tests.
  - `cypress.config.js`: Configuration for Cypress.

## Installation

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 12 or above)
- [Cypress](https://www.cypress.io/)

### Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Anil4466/linkedin-cypress-automation.git
   cd linkedin-cypress-automation
