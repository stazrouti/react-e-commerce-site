// cypress/integration/app_spec.js

// A simple end-to-end test for the React application
describe('React Application', () => {
  it('Should navigate through the application', () => {
    // Visit the home page
    cy.visit('http://localhost:3000/');

    // Verify that the Navbar is visible
    cy.get('.navbar').should('be.visible');

    // Click on a product in the product list
    cy.get('.img-container:first').click();

    // Verify that the Details page is displayed
    cy.url().should('include', '/details');
    cy.get('.img-fluid').should('be.visible');

    // Go back to the home page
    cy.go('back');

    // Verify that the home page is displayed again
    cy.url().should('eq', 'http://localhost:3000/');

    // Click on the cart link in the Navbar

    cy.get('.cart-btn:first').click();

    // Verify that the Cart page is displayed
    cy.get('.sc-bdVaJa').should('be.visible');
    cy.contains('go to cart').click();

    //cy.get('.sc-bdVaJa').click();
    //cy.url().should('include', '/cart');

    // Go back to the home page
    cy.go('back');

    // Verify that the home page is displayed again
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('Should open and close the modal', () => {
    cy.pause();
    // Open the modal by clicking on a specific element
    cy.get('.img-container p-5:first').click();

    // Verify that the modal is visible
    cy.get('#modal').should('be.visible');

    // ... Perform actions on the modal content ...

    // Close the modal
    cy.get('.modal-close').click();

    // Verify that the modal is closed
    cy.get('.modal').should('not.be.visible');

  }); 
});
