class LinkedinLoginPage {
  visit() {
    cy.clearLocalStorage;
    cy.clearAllCookies;
    cy.visit("https://www.linkedin.com/login");
  }

  fillLoginForm(username, password) {
    cy.get("input#username").type(username);
    cy.get("input#password").type(password);
  }

  submitLogin() {
    cy.get('button[type="submit"]').click();
  }

  verifyLoginPage() {
    cy.url().should("include", "linkedin.com/login");
    cy.get("h1").should("contain", "Sign in");
  }

  verifyHomePage() {
    cy.url().should("include", "/feed");
  }
}

export default LinkedinLoginPage;
