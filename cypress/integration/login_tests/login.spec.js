const LoginPage = require('./pageobjects/login.page.js');


context('Actions',()=>{

  before(() => {

    LoginPage.openLogin();
		LoginPage.inputUserName.should('have.attr','name','username');
		LoginPage.inputPassword.should('have.attr','name','password');
		LoginPage.btnSubmit.should('have.value','Login');
  })

	beforeEach(() => {
    LoginPage.openLogin();
  })

	it('should show error message of unsuccessful login',  () => {
	
		LoginPage.login(Cypress.env('username'), Cypress.env('password'));

		LoginPage.spanErrorMessage.should('have.text',
				'No account found with that username.');
	});

	it('should show two error messages of not filling username and password',()=>{

		LoginPage.btnSubmit.click();

		LoginPage.spanErrorMessageForUserName.should('have.text',
				'Please enter username.');
		LoginPage.spanErrorMessageForPassword.should('have.text',
				'Please enter your password.');
	})

	it('should be successfully logined',  () => {

		LoginPage.login(Cypress.env('username'), Cypress.env('password'));

		cy.location('pathname',{timeout:1000})
			.should('include','personal-profile');
	});



})