import'../../page/AddContentPage/AddContentPage'
beforeEach(() => {
    cy.visit('https://www.themoviedb.org/login')
  })

  describe('TESTE ADICIONAR FILMES E SÉRIES', () => {

    it('CAMPO DE TÍTULO VAZIO', () => {
  
    cy.typeLogin('qateste', '1234');
    cy.iniciarProcessoNovoFilme();
    cy.ClickNextButton();
    cy.typeOverview('Teste de descrição que devem conter o mínimo de 10 caracteres')
    cy.typeImdbID('Teste IMDB ID');
    cy.ClickNextButton();
    cy.get('span').contains('Required').should('be.visible');
    })
  
  it('CAMPO DE DESCRIÇÃO VAZIO', () => {
  
    cy.typeLogin('qateste', '1234');
    cy.iniciarProcessoNovoFilme();
    cy.ClickNextButton();
    cy.typeTitle('Teste Título')
    cy.typeImdbID('Teste IMDB ID');
    cy.ClickNextButton();
    cy.get('label').contains(' (minimum 10 characters)').should('be.visible');
    })

    it('DESCRIÇÃO MENOR QUE A EXIGIDA', () => {
  
      cy.typeLogin('qateste', '1234');
      cy.iniciarProcessoNovoFilme();
      cy.ClickNextButton();
      cy.typeTitle('Teste Título')
      cy.typeOverview('Teste')
      cy.typeImdbID('Teste IMDB ID');
      cy.ClickNextButton();
      cy.get('label').contains(' (minimum 10 characters)').should('be.visible');
      })


  })
