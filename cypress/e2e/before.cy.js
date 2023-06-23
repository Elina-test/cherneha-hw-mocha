
describe('method before', () =>{
 
before(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click()
})
  it('test 1', () => {

    cy.get('[title="Layout"]').click()
    cy.get('[title="Stepper"]').click()
  })

  it('test 2', () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click()
    cy.get('[title="Layout"]').click()
    cy.get('[title="List"]').click()

  })


})



describe('method beforeEach', () =>{
 
    beforeEach( () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click()
        cy.get('[title="Layout"]').click()
    })
      it('test 1', () => {
    
        cy.get('[title="Stepper"]').click()
      })
    
      it('test 2', () => {

        cy.get('[title="List"]').click()
    
      })
    
    
    })