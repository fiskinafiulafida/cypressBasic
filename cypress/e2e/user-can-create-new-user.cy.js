describe('template spec', () => {

  before(() => {
    cy.log("runs once before all tests in the block");
  });
  after(() => {
    cy.log("runs once after all tests in the block");
  });
  afterEach(() => {
    cy.log("runs once after test in the block");
  });

  // before each test case
  beforeEach(() => {
    // arrange
    cy.visit('http://127.0.0.1:8000/');
    // reset untuk database by calling php artisan
    cy.exec("cd D:/laravel/demo-app-cypress-automation && php artisan migrate:fresh --seed");

    // actions
    // negatif post test case
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit('http://127.0.0.1:8000/user-management/user');
    cy.get('.card-header-action > .btn-icon').click();
  });

  it('user can create new user', () => {
    // positive post test case
    cy.get('#name').type('baru');
    cy.get('#email').type('baru@gmail.com');
    cy.get('#password').type('1234567890');
    cy.get('.btn-primary').click();

    // assert
    cy.get('p').should('be.visible');
    cy.get('p').should('have.text', 'Data Berhasil Ditambahkan');
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
  });

  it('user cannot create new user because invalid email', () => {
    // positive post test case
    cy.get('#name').type('baru');
    cy.get('#email').type('baru@gmail.com');
    cy.get('#password').type('1234567890');
    cy.get('.btn-primary').click();

    // assert
    cy.get('p').should('be.visible');
    cy.get('p').should('have.text', 'Data Berhasil Ditambahkan');
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
  });

  it('user cannot create new user because name required', () => {
    // positive post test case
    cy.get('#email').type('baru@gmail.com');
    cy.get('#password').type('1234567890');
    cy.get('.btn-primary').click();

    // assert
    cy.get('.invalid-feedback').should('be.visible');
    cy.get('.invalid-feedback').should('have.class', 'invalid-feedback');
    cy.get('.invalid-feedback').should('contain', 'The name field is required.');
    cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
    cy.get('.text-danger').click();
  })
})