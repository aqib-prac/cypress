describe("Testing form ", ()=>{



    const validData = {
  
      fullName: 'Test Opticommerce',
  
      phone: '1234567890',
  
      email: 'test@example.com',
  
      message: 'This is a test message',
  
    };
  
  
  
    it('should successfully submit valid form data', () => {
  
      cy.visit('https://www.greysopticians.co.uk/contact-us/');
  
  
  
      cy.get('#fullName').type(validData.fullName);
  
      cy.get('#telephone').type(validData.phone);
  
      cy.get('#email').type(validData.email);
  
      cy.get('#message').type(validData.message)hfjfhj;
  
  
  
      cy.get('button[type="submit"]').should('be.visible');
  
  
      cy.contains('Thank you for your message!'); // Adjust for actual success message
  
    });
  
  
  
    // Additional positive test cases
  
    it('should accept different email formats', () => {
  
      const emails = ['test@example.com', 'test@email.co.uk'];
  
      emails.forEach(email => {
  
        cy.get('#email').clear().type(email);
  
        cy.get('button[type="submit"]').click();
  
        cy.contains('Thank you for your message!'); // Adjust for actual success message
  
      });
  
    });
  
  
  
    it('should allow short messages', () => {
  
      const shortMessage = 'Hi!';
  
      cy.get('#message').clear().type(shortMessage);
  
      cy.get('button[type="submit"]').click();
  
      cy.contains('Thank you for your message!'); // Adjust for actual success message
  
    });
  
  
  
    // Negative test cases
  
    it('should require full name', () => {
  
      cy.get('#fullName').clear().blur();
  
      cy.get('#email').type(validData.email);
  
      cy.get('#message').type(validData.message);
  
      cy.get('button[type="submit"]').click();
  
      cy.get('#fullName').should('have.class', 'error'); // Adjust for actual error class
  
    });
  
  
  
    it('should require a valid email address', () => {
  
      cy.get('#fullName').type(validData.fullName);
  
      cy.get('#email').clear().type('invalid-email');
  
      cy.get('button[type="submit"]').click();
  
      cy.get('#email').should('have.class', 'error'); // Adjust for actual error class
  
    });
  
  
  
    it('should prevent duplicate submissions', () => {
  
      cy.get('#fullName').type(validData.fullName);
  
      cy.get('#email').type(validData.email);
  
      cy.get('#message').type(validData.message);
  
      cy.get('button[type="submit"]').click();
  
      cy.contains('Thank you for your message!'); // Adjust for actual success message
  
      cy.get('button[type="submit"]').click(); // Submit again
  
      cy.get('.duplicate-submission-error'); // Adjust for actual error message/element
  
    });
  
  
  
    // Add more test cases as needed (e.g., empty phone, invalid phone format, etc.)
  
  
  
  });describe('Contact form', () => {
  
    const validData = {
  
      fullName: 'John Doe',
  
      phone: '1234567890',
  
      email: 'johndoe@example.com',
  
      message: 'This is a test message',
  
    };
  
  
  
    it('should successfully submit valid form data', () => {
  
      cy.visit('https://www.greysopticians.co.uk/contact-us/');
  
  
  
      cy.get('#fullName').type(validData.fullName);
  
      cy.get('#telephone').type(validData.phone);
  
      cy.get('#email').type(validData.email);
  
      cy.get('#message').type(validData.message);
  
  
  
      cy.get('button[type="submit"]').click();
  
  
  
      cy.contains('Thank you for your message!'); // Adjust for actual success message
  
    });
  
  
  
    // Additional positive test cases
  
    it('should accept different email formats', () => {
  
      const emails = ['johndoe@example.com', 'john.doe@email.co.uk'];
  
      emails.forEach(email => {
  
        cy.get('#email').clear().type(email);
  
        cy.get('button[type="submit"]').click();
  
        cy.contains('Thank you for your message!'); // Adjust for actual success message
  
      });
  
    });
  
  
  
    it('should allow short messages', () => {
  
      const shortMessage = 'Hi!';
  
      cy.get('#message').clear().type(shortMessage);
  
      cy.get('button[type="submit"]').click();
  
      cy.contains('Thank you for your message!'); // Adjust for actual success message
  
    });
  
  
  
    // Negative test cases
  
    it('should require full name', () => {
  
      cy.get('#fullName').clear().blur();
  
      cy.get('#email').type(validData.email);
  
      cy.get('#message').type(validData.message);
  
      cy.get('button[type="submit"]').click();
  
      cy.get('#fullName').should('have.class', 'error'); // Adjust for actual error class
  
    });
  
  
  
    it('should require a valid email address', () => {
  
      cy.get('#fullName').type(validData.fullName);
  
      cy.get('#email').clear().type('invalid-email');
  
      cy.get('button[type="submit"]').click();
  
      cy.get('#email').should('have.class', 'error'); // Adjust for actual error class
  
    });
  
  
  
    it('should prevent duplicate submissions', () => {
  
      cy.get('#fullName').type(validData.fullName);
  
      cy.get('#email').type(validData.email);
  
      cy.get('#message').type(validData.message);
  
      cy.get('button[type="submit"]').click();
  
      cy.contains('Thank you for your message!'); // Adjust for actual success message
  
      cy.get('button[type="submit"]').click(); // Submit again
  
      cy.get('.duplicate-submission-error'); // Adjust for actual error message/element
  
    });
  
  
  
    // Add more test cases as needed (e.g., empty phone, invalid phone format, etc.)
  
  
  
  });