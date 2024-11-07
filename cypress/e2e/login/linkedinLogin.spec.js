import LinkedinLoginPage from '../../support/pageObjects/linkedinLoginPage';

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("getInstalledRelatedApps")) {
      return false;
    }
  });
describe('LinkedIn Login Test', () => {
  const loginPage = new LinkedinLoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it.only('should successfully log in with valid credentials', () => {
    // Get credentials from the fixture
    cy.fixture('loginData.json').then((loginData) => {
      const { username, password } = loginData;

      // Fill the login form and submit
      loginPage.fillLoginForm(username, password);
      loginPage.submitLogin();

      // Verify that we are redirected to the LinkedIn home page
      loginPage.verifyHomePage();
    });
  });

  it('should show an error for invalid credentials', () => {
    // Using invalid credentials
    cy.fixture('loginData.json').then((loginData) => {
      const { username } = loginData;
      const invalidPassword = 'wrongpassword';

      // Fill the login form and submit
      loginPage.fillLoginForm(username, invalidPassword);
      loginPage.submitLogin();

      cy.xpath('//div[@id="error-for-password"]').should('contain', 'Wrong email or password. Try again or')
    });
  });
});
