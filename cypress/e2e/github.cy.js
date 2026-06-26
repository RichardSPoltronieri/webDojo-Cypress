describe('Gerenciamento de perfis no Github', () => {

    beforeEach(() => {
        cy.start()
        cy.login()
        cy.goTo('Tabela', 'Perfis do GitHub')
    })

    it('Deve poder cadastrar um novo perfil do gitHub', () => {
        cy.get('#name').type('Richard Teste')
        cy.get('#username').type('richardteste2')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()

        cy.get('#name').type('Richard Teste')
        cy.get('#username').type('richardteste')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', 'richardteste')
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile')
            .contains('Richard Teste')
            .should('be.visible')

        cy.get('@trProfile')
            .contains('QA')
            .should('be.visible')
    })

    it.only('Deve remover um perfil do gitHub', () => {

        const profile = {

            name: "Richard Teste",
            username: "perfilRichard",
            desc: "QA"
        }

        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.username)
        cy.get('#profile').type(profile.desc)

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', profile.username)
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile').find('button[title="Remover perfil"]').click()
        
        cy.contains('table tbody', profile.username)
            .should('not.exist')
            
    })

})