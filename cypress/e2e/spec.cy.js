import "cypress-axe";

describe("sign up accessibility suite", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.injectAxe();
  });

  // it("check entire page for a11y issue", () => {
  //   cy.checkA11y();
  // });

  it("checks alt text of the logo image", () => {
    cy.visit("http://localhost:3000/");

    cy.get('img[data-cy="logo"]').should("have.attr", "alt", "React Logo");
  });

  // it("Test for any baccessibility issues on page with custom parameters.", () => {
  //   cy.checkA11y("shelf-item", {
  //     runOnly: {
  //       type: "tag",
  //       values: ["wcag2a"],
  //     },
  //   });
  // });
});
