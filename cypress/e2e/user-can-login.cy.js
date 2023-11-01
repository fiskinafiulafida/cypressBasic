describe('User can Login to System', () => {
  // positive test case

  it('user can login with valid username and password', () => {
    // arrange
    cy.visit("http://127.0.0.1:8000/");
    // select element html yang dibutuhkan
    // apabila sudah mendapatkan elementnya kemudian akan diapakan ? (.type)
    // act
    cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
    // select element html yang dibutuhkan
    // apabila sudah mendapatkan elementnya kemudian akan diapakan ? (.type)
    cy.get(':nth-child(3) > .form-control').type("password");

    // fungsi untuk buttonnya 
    cy.get('.btn').click();

    // untuk mnengetahui setiap test digunakan untuk mengetahui assersi
    // select element html yang dibutuhkan
    // lakukan assertion yang sesuai dengan test case
    // assert
    cy.get('.nav-link > .d-sm-none').should("have.text", "Hi, SuperAdmin");

  });

  // negative test case
  // untuk password yang benar
  it("User cannot login with valid username and wrong password", () => {
    // arrange
    cy.visit("http://127.0.0.1:8000/");
    // act
    cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password-salah");
    cy.get('.btn').click();
    // assert
    cy.get('.invalid-feedback').should(
      "have.text",
      "These credentials do not match our records."
    );
  });
  // Untuk email dan pass yang salah 
  it("User cannot login with invalid username and valid password", () => {
    // arrange
    cy.visit("http://127.0.0.1:8000/");
    // act
    cy.get(":nth-child(2) > .form-control").type("superadminadasda@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password-salah");
    cy.get('.btn').click();
    // assert
    cy.get('.invalid-feedback').should(
      "have.text",
      "These credentials do not match our records."
    );
  });


  it("User cannot login with empty username and correct password", () => {
    // arrange
    cy.visit("http://127.0.0.1:8000/");
    // act
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();
    // assert
    cy.get('.invalid-feedback').should(
      "have.text",
      "The email field is required."
    );
  });

  it("User cannot login with empty username and correct password", () => {
    // arrange
    cy.visit("http://127.0.0.1:8000/");
    // act
    cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
    cy.get('.btn').click();
    // assert
    cy.get('.invalid-feedback').should(
      "have.text",
      "The password field is required."
    );
  });

  // KUIS 
  // Positif
  // Ketika login masukan username dan password tetapi sensitif huruf besar kecilnya 
  it('Username dan password tetapi sensitif huruf besar kecilnya ', () => {
    cy.visit("http://127.0.0.1:8000/");
    cy.get(":nth-child(2) > .form-control").type("Superadmin@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();
    cy.get('.nav-link > .d-sm-none').should("have.text", "Hi, SuperAdmin");

  });

  // Negatif 
  // Menjawab challenge untuk negative test, apabila langsung tombol login akan muncul notifikasi silahkan isi email dan pass terlebih dahulu
  it("User wajib melakukan mengisi username dan password terlebih dahulu sebelum melakukan klik tombol login", () => {
    // arrange
    cy.visit("http://127.0.0.1:8000/");
    // act
    cy.get('.btn').click();
    // assert
    cy.get('.invalid-feedback').should(
      "have.text",
      "The email field is required.The password field is required."
    );
  });
});