

Cypress.Commands.add('typeLogin', (username, password) =>{
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#login_button').click();
})

Cypress.Commands.add('ClickProfileButton', () =>{
    cy.get('.no_click > .avatar').contains('l').click();
})

Cypress.Commands.add('ClickListsButton', () =>{
    cy.get('.k-tooltip-content > .settings_content > div > p > a').contains('Listas').click({ force: true });
})

Cypress.Commands.add('CreateList', (title, description) =>{
    cy.get('.title_header > a').contains('Criar Lista').click();
      cy.get('#name').type(title);
      cy.get('#description').type(description);
      cy.get('#step_1_submit').click();
})

Cypress.Commands.add('AddMovieList', () =>{
    cy.get('#list_item_search').type('D');
    cy.get('#list_item_search_listbox > li:nth-child(7) > div > div > div > div.content > p.name').click();
})