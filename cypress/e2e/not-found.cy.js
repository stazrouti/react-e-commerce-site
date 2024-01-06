// Example Cypress E2E test for 404 Not Found using cy.visit()
describe('404 Not Found Test', () => {
    it('should display a 404 page', () => {
      // Use cy.visit() to navigate to the non-existent page
      cy.visit('http://localhost:3000/nonexistent-page', { failOnStatusCode: false });
  
      // Assert that the status code is 404
      cy.get('body').should('contain', '404');
    });
  });
  