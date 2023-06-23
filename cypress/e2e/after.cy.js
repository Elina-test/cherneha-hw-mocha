
beforeEach( () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click()
    cy.get('[title="Layout"]').click()
})

describe('method after', () =>{
 
   after(() =>{
    cy.log('log after all')
   })
      it('test 1', { retries: 2}, () => { //retries - кількість спроб

        cy.get('[title="Stepper1"]').click()
      })
    
      it('test 2', () => {
        cy.get('[title="List"]').click()
    
      })
    
    })
    
    
describe('method afterEach', () =>{
     
    })
        it('test 1', () => {
        cy.get('[title="Stepper"]').click()
    })
        
        it('test 2', () => {
        cy.get('[title="List"]').click()
    })
    