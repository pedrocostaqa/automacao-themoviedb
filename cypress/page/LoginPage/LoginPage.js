
Cypress.Commands.add('typeLogin', (username, password) =>{
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#login_button').click();
})


Cypress.Commands.add('typeUsername', (username) =>{
    cy.get('#username').type(username);
})

Cypress.Commands.add('typePassword', (password) =>{
    cy.get('#password').type(password);
})

Cypress.Commands.add('ClickLoginButton', () =>{
    cy.get('#login_button').click();
}) 

Cypress.Commands.add('ClickProfileButton', () =>{
    cy.get('.no_click > .avatar').contains('t').click();
}) 

Cypress.Commands.add('ClickLogOutButton', () =>{
    cy.get('.k-tooltip-content > .settings_content > div > p > a').contains('Sair').click({ force: true });
}) 

