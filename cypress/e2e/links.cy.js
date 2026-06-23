describe('Links abrindo nova guia/janela', () => {
    it('Validando o atribudo do link do Instagram', () => {
        cy.start()
        cy.validLogin()

        cy.get('[data-cy="instagram-link"]')
            .should('have.attr', 'href', 'https://www.instagram.com/qapapito')
            .and('have.attr', 'target', '_blank')
    })

    it.only('Acessa link termos de uso removendo o target blank', () => {
        cy.start()
        cy.validLogin()

        cy.contains('Formulários').click()
        cy.contains('a','termos de uso')
            .invoke('removeAttr','target')
            .click()

        cy.contains('1. Aceitação dos Termos')
            .should('be.visible')   
    })
})