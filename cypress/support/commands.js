Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
  cy.get('#firstName').type('Kerley')
    cy.get('#lastName').type('Piffer Fochesatto')
    cy.get('#email').type('fochesatto.kerley@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()
})
