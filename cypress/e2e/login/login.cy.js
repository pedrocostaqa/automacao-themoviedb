import'../../page/LoginPage/LoginPage'
beforeEach(() => {
    cy.visit('https://www.themoviedb.org/login')
  })
  
  describe('TESTE DE LOGIN', () => {

  it('LOGIN COM CREDENCIAIS VÁLIDAS', () => {

  cy.typeLogin('testeqa','Testesenha@123' );
  cy.get('h3').contains('Gêneros mais assistidos').should('be.visible');
  cy.wait(1000);
 })

 it('LOGIN COM NOME DE USUÁRIO INVÁLIDO', () => {

  cy.typeLogin('testeqa2','Testesenha@123' );
   cy.get('span').contains('There was a problem').should('be.visible');
   cy.wait(1000);
  })

  it('LOGIN COM SENHA INVÁLIDA', () => {

    cy.typeLogin('testeqa','Testesenha@1234' );
   cy.get('span').contains('There was a problem').should('be.visible');
   cy.wait(1000);
  })

  it('LOGIN COM CAMPO DE SENHA VAZIO', () => {

  cy.typeUsername('testeqa');
   cy.ClickLoginButton();
   cy.get('span').contains('Senha').should('be.visible');
   cy.wait(1000);
  })

  it('LOGOUT DO USUÁRIO', () => {

  cy.typeLogin('testeqa','Testesenha@123' );
   cy.ClickProfileButton();
   cy.ClickLogOutButton();
   cy.get('h2').contains('Desconectado').should('be.visible');
   cy.wait(1000);
 
  })

})













