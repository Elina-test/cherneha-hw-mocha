let someVar3 = 123; //змінна доступна для всіх с'ютів у файлі

describe('Positive scenarios', () =>{
  let someVar2 = 123; //змінна доступна для всіх тестів у даному с'юті

  it('test 1', () => {
    let someVar = 123; //змінна доступна лише для цього теста
    cy.visit('https://google.com');
    cy.log(someVar); 
    cy.log(someVar2);
    cy.log(someVar3);
  })

  it('test 2', () => {
    cy.visit('https://google.com');
    cy.log(someVar2);
  })

  it('test 3', () => {
    cy.visit('https://google.com')
  })

});

describe.only('Negative scenarios', () =>{
  
  it('test 1', () => {
    cy.visit('https://google.com')
  })

  it('test 2', () => {
    cy.visit('https://google.com')
  })

  it.skip('test 3', () => { //skip - пропускає тест чи весь c'ют
    cy.visit('https://google.com')
    someVar3 = 321;
    cy.log(someVar3);
  })

})