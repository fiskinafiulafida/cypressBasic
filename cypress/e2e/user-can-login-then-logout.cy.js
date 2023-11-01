describe('User can username and password', () => {
  it('passes', () => {
    // cy.visit("http://127.0.0.1:8000/");
    // Percobaan video 17
    // cy.get('[data-id="email"]').type("superadmin@gmail.com");
    // cy.get('[data-id="password"]').type("password");
    // cy.get('[data-id="submit"]').click();
    // cy.get('[data-id="username"]').click();
    // cy.get('[data-id="logout-btn"]').click();

    // cy.get(":nth-child(2) > .form-control").clear("s");
    // cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
    // cy.get(":nth-child(3) > .form-control").clear("");
    // cy.get(':nth-child(3) > .form-control').type("password");
    // cy.get('.btn').click();
    // cy.get('.nav-link > .d-sm-none').should("have.text", "Hi, SuperAdmin");
    // cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
    // cy.get('.text-danger').click();
    // cy.get('h4').should("be.visible");
    // cy.get('h4').should("have.text", "Login");
    // cy.get('.simple-footer').should("contain", "Copyright © Stisla 2018")
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://127.0.0.1:8000/');
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
    /* ==== End Cypress Studio ==== */
  });
})