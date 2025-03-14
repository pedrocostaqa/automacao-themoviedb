

Cypress.Commands.add('typeLogin', (username, password) =>{
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#login_button').click();
})


Cypress.Commands.add('iniciarProcessoNovoFilme', () => {
    cy.get('.new_icon > .glyphicons_v2').click();
    cy.get('a[href="/movie/new"]').first().click();
});



Cypress.Commands.add('ClickNextButton', () =>{
    cy.get('a').contains('Next').click();
})

Cypress.Commands.add('typeTitle', (title) =>{
    cy.get('#original_title').type(title);
})

Cypress.Commands.add('typeOverview', (overview) =>{
    cy.get('#overview').type(overview);
})

Cypress.Commands.add('typeImdbID', (id) =>{
    cy.get('#imdb_id').type(id);
})