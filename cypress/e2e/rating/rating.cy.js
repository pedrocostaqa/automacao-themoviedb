import'../../page/RatingPage/RatingPage'
beforeEach(() => {
    cy.visit('https://www.themoviedb.org/login')
  })


  describe('AVALIAÇÃO DE CONTEÚDO', () => {

    it('VALIDAR AVALIAÇÃO DE CONTEÚDO COM EMOJI', () => {
  
      cy.typeLogin('testeqa','Testesenha@123' );
      cy.visit("https://www.themoviedb.org/");
      cy.ClickMovie();
      cy.OpenRating();
      cy.ClickEmoji();
      cy.contains(
        "div.notification.success",
        "Suas edições foram salvas com sucesso.",
        { timeout: 10000 }
      ).should("be.visible");
      cy.ClickSubmit();
      cy.ClickSubmit();
      cy.wait(2000)
      //COMANDO PASSADO PARA LIMPAR A NOTA, PARA QUE O TESTE POSSA SER RODADO DE NOVO.
      cy.OpenRating();
      cy.ClickClearEmoji();   
      cy.ClickSubmit();
      cy.wait(2000)
      cy.contains(
        "div.notification.success",
        "Suas edições foram salvas com sucesso.",
        { timeout: 10000 }
      ).should("be.visible");
  
    });

    it('VALIDAR AVALIAÇÃO DE CONTEÚDO', () => {
  
      cy.typeLogin('testeqa','Testesenha@123');
      cy.ClickMovie();
      cy.OpenRating();
      cy.ChooseVibe();
      cy.visit('https://www.themoviedb.org/')
      cy.ClickMovie();
      cy.wait(2000);
    cy.contains('#vibes_content > :nth-child(1)', 'Your Vibe')
    .should('be.visible');



//COMANDO PASSADO PARA LIMPAR A NOTA, PARA QUE O TESTE POSSA SER RODADO DE NOVO.
cy.OpenRating();
cy.ClickClearVibe();
cy.visit('https://www.themoviedb.org/')
cy.ClickMovie();
cy.wait(2000);

    
      });

    it('VALIDAR AVALIAÇÃO PELA LISTA DE FAVORITOS', () => {
      
      cy.typeLogin('valdemarcastelo@gmail.com','teste123');
        // Passa o mouse sobre "Favoritos" para abrir o submenu
        cy.MouseOver();
        // Adiciona uma pequena pausa para permitir que o menu seja carregado
        cy.wait(1000);
        // Clica no link "Filmes" dentro do submenu de Favoritos usando force: true
        cy.FavFilmes();
        cy.wait(1000);
        // Clica no botão "Avalie!" do primeiro filme favorito
        cy.AvaliaçãoButton();
        // Clica na terceira estrela para avaliar com 3 estrelas
        cy.EstrelaButton();
        // Verifica se a mensagem de confirmação apareceu com o texto correto
        cy.contains('Sua avaliação foi enviada com sucesso.')
        .should('be.visible');


    })
   })




