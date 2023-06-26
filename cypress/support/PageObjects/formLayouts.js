export class FormLayoutsPage{

    goToFormsLayouts() {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click()
        cy.get('[title="Forms"]').click()
        cy.get('[title="Form Layouts"]').click()
    }

}
export const onFormLayoutsPage = new FormLayoutsPage()