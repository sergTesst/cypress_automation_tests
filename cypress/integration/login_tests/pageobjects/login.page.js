const Page = require('./page.js');

class LoginPage extends Page{

	get inputUserName(){return cy.get('[name="username"]')}
	get inputPassword(){return cy.get('[name="password"]')}
	get btnSubmit(){return cy.get('input[type="submit"]')}

	
	get spanErrorMessage () {return cy.get('.help-block')}

	get spanErrorMessageForUserName(){return cy.get('form[method="post"] .has-error:nth-child(1) .help-block')}
	get spanErrorMessageForPassword(){return cy.get('form[method="post"] .has-error:nth-child(2) .help-block')}

	login (username,password){

		this.inputUserName
			.type(username);

		this.inputPassword
			.type(password);

		this.btnSubmit
			.click();
	}


	openLogin(){
		return super.open('qa-portal/registerlogin/registerlogin.php')
	}

}
module.exports = new LoginPage();