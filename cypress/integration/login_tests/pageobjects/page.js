module.exports = class Page {

	open (path) {
			return cy.visit(`https://www.pecodesoftware.com/${path}`)
	}
}