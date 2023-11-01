describe('User Can Delete Data', () => {
  afterEach(() => {
    // reset untuk database by calling php artisan
    cy.exec("cd D:/laravel/demo-app-cypress-automation && php artisan migrate:fresh --seed");

  })
  // before each test case
  beforeEach(() => {
    // arrange
    cy.exec("cd D:/laravel/demo-app-cypress-automation && php artisan migrate:fresh --seed");
    cy.visit('http://127.0.0.1:8000/');

    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit('http://127.0.0.1:8000/user-management/user');
  });

  // positive post test case
  it('user can delete data', () => {
    // cy.get(".table td")
    //   .contains("user")
    //   .next()
    //   .next()
    //   .next()
    //   .contains("Delete")
    //   .click();

    // cy.get(".table td")
    //   .contains("user")
    //   .nextAll()
    //   .contains("Delete")
    //   .click();

    // cy.get(".table td")
    //   .contains("user")
    //   .nextUntil(".text-right")
    //   .contains("Delete")
    //   .click();

    cy.get(".table td")
      .contains("user")
      .parent()
      .find("button")
      .contains("Delete")
      .click();

    // make sure sweet alert visible
    cy.get(".swal-button-container").find("button").contains("OK").click();
    cy.get(".alert")
      .should("be.visible")
      .and("have.class", "alert-success")
      .contains("User Deleted Successfully")
    cy.get('.table').should('not.contain', 'user')
  });

  it.only('user can cancel delete data', () => {
    cy.get(".table td")
      .contains("user")
      .parent()
      .find("button")
      .contains("Delete")
      .click();

    // make sure sweet alert visible
    cy.get(".swal-button-container").find("button").contains("Cancel").click();
    cy.get(".table td").contains("user").should("be.visible");

  });

  // negatif post test case
  it('dummy test', () => {

    // arrange
    // act
    // assert
  });

})