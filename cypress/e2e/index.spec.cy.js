describe('Initialise', () => {
  it('passes', () => {
    // cy.visit('http://localhost:8080/api/v1')
     cy.request('http://localhost:8080/api/v1')
     .its('body').its('message').should('eq','bienvenue API musik V1 😃 🎵🎼 🎤 🎧 🎷 🎸 🎹 ')
  })
})
// describe('Initialise', () => {
//   it('passes', () => {
//     // cy.visit('http://localhost:8080/api/v1')
//      cy.request('http://localhost:8080/api/v1')
//      .its('body').
//      its('message').should('eq','bienvenue API musik V1 😃 🎵🎼 🎤 🎧 🎷 🎸 🎹 ')
//   })
// })