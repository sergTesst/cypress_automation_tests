it('has username to use', () => {
  expect(Cypress.env('username')).to.be.a('string')
})
it('has password to use', () => {
  expect(Cypress.env('password')).to.be.a('string')
})
