Cypress.Commands.add('typeLogin', (username, password) =>{
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#login_button').click();
})

Cypress.Commands.add('ClickMovie', () =>{
    cy.get('.dropdown_menu > :nth-child(1) > .no_click').click()
      cy.get('.k-item.k-state-border-down > .k-animation-container > .k-group > .k-first > .k-link').click()
      cy.get(':nth-child(1) > div.image > .wrapper > .image > .poster').click()
}) 

Cypress.Commands.add('OpenRating', () =>{
    cy.get("#vibes_label").click();
}) 


Cypress.Commands.add('ClickSubmit', () =>{
    cy.get("#vibes_submit").click();
}) 

Cypress.Commands.add('ClickEmoji', () =>{
    cy.get(
        'img[src="/assets/2/v8/1f610-62923ac52d24e185d7cd7db5aa372482d4477f795483d1873a4081ba306e5d57.svg"]'
      ).click();
}) 

Cypress.Commands.add('ClickClearEmoji', () =>{
    cy.get('#moods_grid > div > div:nth-child(2) > ul > li:nth-child(2) > label > img').click();

    }) 

    Cypress.Commands.add('ClickClearVibe', () =>{
        cy.get('#clear_rating').click();
    
        }) 


    Cypress.Commands.add('ChooseVibe', () =>{
        cy.get('li.k-tick.k-tick-large[title="10"]').click({ force: true })
    
        }) 


    Cypress.Commands.add('MouseOver', () =>{
        cy.get('.true > :nth-child(1)').trigger('mouseover');
    }) 

    Cypress.Commands.add('FavFilmes', () =>{
        cy.get('a.k-link.k-menu-link[href="/u/valdemarcastelo%40gmail.com/favorites"]').click({ force: true });
    }) 

    Cypress.Commands.add('AvaliaçãoButton', () =>{
        cy.get('a.list_item_rating').first().click();
    }) 

    Cypress.Commands.add('EstrelaButton', () =>{
        cy.get('i.glyphicons_v2.star-empty.invert.svg')
        .eq(2)  
        .click({ force: true });
    }) 
