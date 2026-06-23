describe('Simulando mouse hover', () => {
    it('Deve mostrar um texto ao passar o mouse em cima', () => {
        cy.start()
        cy.validLogin()

        cy.contains('Isso é Mouseover!').should('not.exist')
        cy.get('[data-cy="instagram-link"]').realHover()
        cy.contains('Isso é Mouseover!').should('exist')

    })
})
