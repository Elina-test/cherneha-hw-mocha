import { onFormLayoutsPage } from "../support/PageObjects/formLayouts"

const tests = [{testNum: 1, email: "123@i.ua", password: "12345678"},
               {testNum: 2, email: "12345@i.ua", password: "987654"}];

describe('Fill in Basic form and Using the Grid',() =>{
    beforeEach(() => {
    
        onFormLayoutsPage.goToFormsLayouts()
  
      });

    
    tests.forEach(({testNum, email, password}) => {
        it(`Fill in Basic form ${testNum}`, () => {
            cy.get('input[id="exampleInputEmail1"]').type(email)
            cy.get('input[id="exampleInputPassword1"]').type(password)
            cy.get('[type="checkbox"]').eq(2).check({force: true})
            cy.get('button[status="danger"]').click()
                   

        })
    })

    tests.forEach(({testNum, email, password}) => {
        it.only(`Fill in Using the Grid ${testNum}`, () => {
            cy.get('input[id="inputEmail1"]').type(email)
            cy.get('input[id="inputPassword2"]').type(password)
            cy.get('[type="radio"]').first().check({force: true})
            cy.get('[class="offset-sm-3 col-sm-9"]').find('button[status="primary"]').click()
                   

        })
    })
    
    })