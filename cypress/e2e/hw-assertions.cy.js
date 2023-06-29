const tests = [{testData: {
                position: '[ng-reflect-value="top-right"]',
                title: 'First toaster',
                content: 'Primary toaster',
                time: '20000',
                type: '[ng-reflect-value="primary"]'
},
               expectedResult: {
                icon: 'email',
                title: 'First toaster',
                content: 'Primary toaster',
                color: 'rgb(233, 29, 99)',
                position: {offsetLeft:1504,
                           offsetTop:0,
                        }
               }},

               {testData: {
                position: '[ng-reflect-value="top-left"]',
                title: 'Second toaster',
                content: 'Success toaster',
                time: '10000',
                type: '[ng-reflect-value="success"]'
},
               expectedResult: {
                icon: 'checkmark',
                title: 'Second toaster',
                content: 'Success toaster',
                color: 'rgb(96, 175, 32)',
                position: {offsetLeft:0,
                           offsetTop:0
                            }
               }},

               {testData: {
                position: '[ng-reflect-value="bottom-left"]',
                title: 'Third toaster',
                content: 'Info toaster',
                time: '15000',
                type: '[ng-reflect-value="info"]'
},
               expectedResult: {
                icon: 'question-mark',
                title: 'Third toaster',
                content: 'Info toaster',
                color: 'rgb(4, 149, 238)',
                position: {offsetLeft:0,
                            offsetTop:987
                            }
               }},

               {testData: {
                position: '[ng-reflect-value="bottom-right"]',
                title: 'Fourth toaster',
                content: 'Warning toaster',
                time: '18000',
                type: '[ng-reflect-value="warning"]'
},
               expectedResult: {
                icon: 'alert-triangle',
                title: 'Fourth toaster',
                content: 'Warning toaster',
                color: 'rgb(255, 159, 5)',
                position: {offsetLeft:1504,
                           offsetTop:987
                            }
               }},
            ];

describe('Assertions for the toaster settings',() =>{
    beforeEach(() => {
    
        cy.visit('http://sanitarskyi-ngx-admin.herokuapp.com');
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click()
        cy.get('[title="Modal & Overlays"]').click()
        cy.get('[title="Toastr"]').click()

  
      });

    
    tests.forEach(({testData, expectedResult}) => {
        it(`${testData.title}`, () => {
            cy.get('nb-card-body button.select-button').eq(0).click()
            cy.get(testData.position).click()
            cy.get('nb-card-body button.select-button').eq(1).click()
            cy.get(testData.type).click()
            cy.get('input[name="title"]').type(testData.title)
            cy.get('input[name="content"]').type(testData.content)
            cy.get('input[name="timeout"]').clear().type(testData.time)
            cy.get('nb-card-footer button').eq(0).click()

            cy.get('.cdk-overlay-pane nb-toastr-container nb-toast div.icon-container.ng-star-inserted nb-icon svg g g')
            .invoke('attr', 'data-name')
            .should('eq', expectedResult.icon)
            cy.get('.cdk-overlay-pane nb-toastr-container nb-toast div.content-container span')
            .should('contain', expectedResult.title)
            cy.get('.cdk-overlay-pane nb-toastr-container nb-toast div.content-container div')
            .should('contain', expectedResult.content)
            cy.get('.cdk-overlay-pane nb-toastr-container nb-toast')
            .should('have.css', 'background-color', expectedResult.color)
            cy.get('.cdk-overlay-pane nb-toastr-container') 
            .should(($element) => {
             expect($element[0].offsetLeft).to.eq(expectedResult.position.offsetLeft);
            })
            cy.get('.cdk-overlay-pane nb-toastr-container') 
            .should(($element) => {
             expect($element[0].offsetTop).to.eq(expectedResult.position.offsetTop);
            });      

        })
    })

    })
