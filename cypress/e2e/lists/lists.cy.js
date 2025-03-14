import'../../page/ListsPage/ListsPage'
beforeEach(() => {
    cy.visit('https://www.themoviedb.org/login')
  })


  describe('VALIDAR CRIAÇÃO DE LISTAS', () => {

    it('VALIDAR CRIAÇÃO DE LISTAS COM TÍTULO VAZIO', () => {
  
        
          cy.typeLogin('leoguacui','1234');
          cy.ClickProfileButton();
          cy.ClickListsButton();
          cy.get('.title_header > a').contains('Criar Lista').click();
          cy.get('#description').type('Descrição Teste');
          cy.get('#step_1_submit').click();
          cy.get('h2').contains(' Ocorreram erros de validação...').should('be.visible');
          cy.wait(1000);
        });
    
        it('VALIDAR CRIAÇÃO DE LISTAS COM DESCRIÇÃO VAZIA', () => {
  
          cy.typeLogin('leoguacui','1234');
          cy.ClickProfileButton();
          cy.ClickListsButton();
          cy.get('.title_header > a').contains('Criar Lista').click();
          cy.get('#name').type('Lista teste');
          cy.get('#step_1_submit').click();
          cy.get('span').contains('Adicionar Item').should('be.visible');
          cy.wait(1000);
            });

  
    it('VALIDAR CRIAÇÃO DE LISTAS COM TODOS OS CAMPOS PREENCHIDOS', () => {
  
      cy.typeLogin('leoguacui','1234');
      cy.ClickProfileButton();
      cy.ClickListsButton();
      cy.CreateList('Lista teste', 'Descrição Teste');
      cy.get('span').contains('Adicionar Item').should('be.visible');
      cy.wait(1000);
    });


    it('VALIDAR ADICIONAR ITEM A LISTA', () => {
  
          cy.typeLogin('leoguacui','1234');
          cy.ClickProfileButton();
          cy.ClickListsButton();
          cy.CreateList('Lista teste', 'Descrição Teste');
          cy.AddMovieList();
          cy.contains('Sucesso').should('be.visible');
          cy.wait(1000);
         
        });

        it('VALIDAR ADICIONAR ITEM DUPLICADO A LISTA', () => {
  
              cy.typeLogin('leoguacui','1234');
              cy.ClickProfileButton();
              cy.ClickListsButton();
              cy.CreateList('Lista teste', 'Descrição Teste');
              cy.AddMovieList();
              cy.wait(2000);
              cy.AddMovieList();
              cy.contains('Sucesso').should('be.visible');
              cy.wait(1000);
            });

            it('VALIDAR EXCLUSÃO DA LISTA', () => {
  
                cy.typeLogin('leoguacui','1234');
                cy.ClickProfileButton();
                cy.ClickListsButton();
                cy.get('#main > div.account_page_data > div > div > div > div.items_wrapper > div > div:nth-child(1) > div.details > h2 > a').click();
                cy.get('a').contains('Editar').click();
                cy.get(':nth-child(4) > .color_hover').click();
                cy.get('#delete_list').click();   
                cy.get('button').contains('Sim').click();
                cy.get('h2').contains('Minhas listas').should('be.visible');
                cy.wait(1000);             
            })
                });
    






