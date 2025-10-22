import "cypress-axe";

describe("sign up accessibility suite", () => {
  before(() => {
    cy.visit("http://localhost:3000/");
    cy.injectAxe();
  });

  // it("should check alt text of the logo image", () => {
  //   cy.visit("http://localhost:3000/about");

  //   cy.get('img[alt="React Logo"]').should("be.visible");
  // });

  // it("check entire page for a11y issue", () => {
  //   cy.checkA11y();
  // });

  // it("checks alt text of the logo image", () => {
  //   cy.visit("http://localhost:3000/");

  //   cy.get('img[data-cy="logo"]').should("have.attr", "alt", "React Logo");
  // });

  // it("Test for any baccessibility issues on page with custom parameters.", () => {
  //   cy.checkA11y("#nav", {
  //     runOnly: {
  //       type: "tag",
  //       values: ["wcag2a"],
  //     },
  //   });
  // });

  // it("should click the button and check for alert", () => {
  //   // Locate and click a button by its role and accessible name
  //   cy.visit("http://localhost:3000/about");
  //   cy.findByRole("button", { name: "React Logo" }).click();
  // });
});
