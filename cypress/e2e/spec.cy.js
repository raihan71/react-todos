import "cypress-axe";

describe('sign up accessibility suite', () => {
  before(() => {
    cy.visit("http://localhost:3000/");
    cy.injectAxe();
  });

  it('check entire page for a11y issue', () => {
    cy.checkA11y();
  });
});
