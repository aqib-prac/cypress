  // Helper function to fill form inputs
  function fillFormInputs(data) {
    cy.get('input[name="fullName"]').type(data.fullName);
    cy.get('input[name="telephone"]').type(data.telephone);
    cy.get('input[name="email"]').type(data.email);
    cy.get('textarea[name="message"]').type(data.message);
  }
  
describe('Contact form tests', () => {
    beforeEach(() => {
      cy.visit('/contact-page');
    });
  
    // Positive scenario with valid data
    it('should successfully submit with valid email and phone number', () => {
      const validData = {
        fullName: 'John Doe',
        telephone: '+1234567890',
        email: 'johndoe@example.com',
        message: 'This is a test message',
      };
  
      cy.fillFormInputs(validData);
      cy.get('button[type="submit"]').click();
  
      // Assert successful submission
      cy.contains('Thank you for your message!');
      cy.get('input[name="fullName"], input[name="telephone"], input[name="email"], textarea[name="message"]')
        .should('have.value', ''); // Verify fields are cleared after submission
    });
  
    // Negative scenarios with invalid data
    it('should not submit with invalid email format', () => {
      const invalidEmails = [
        'johndoe',
        'johndoe@example',
        'johndoe@example.',
      ];
  
      invalidEmails.forEach((email) => {
        cy.fillFormInputs({ ...validData, email });
        cy.get('button[type="submit"]').click();
  
        cy.contains('Please enter a valid email address'); // Assert error message for email
        cy.get('input[name="email"]').should('have.value', email); // Verify field retains invalid value
      });
    });
  
    it('should not submit with non-numeric characters in phone number', () => {
      const invalidPhones = [
        'abc123',
        '123-456-7890',
        '(123) 456-7890',
        '+123 456 7890',
      ];
  
      invalidPhones.forEach((phone) => {
        cy.fillFormInputs({ ...validData, telephone: phone });
        cy.get('button[type="submit"]').click();
  
        cy.contains('Please enter a valid phone number consisting of numbers only and starting with a + sign'); // Assert error message for phone
        cy.get('input[name="telephone"]').should('have.value', phone); // Verify field retains invalid value
      });
    });
  
    it('should not submit with phone number not starting with + sign', () => {
      const invalidPhone = '1234567890';
  
      cy.fillFormInputs({ ...validData, telephone: invalidPhone });
      cy.get('button[type="submit"]').click();
  
      // Assert error message for phone (same as previous test)
      cy.contains('Please enter a valid phone number consisting of numbers only and starting with a + sign');
      cy.get('input[name="telephone"]').should('have.value', invalidPhone);
    });
  });
  
