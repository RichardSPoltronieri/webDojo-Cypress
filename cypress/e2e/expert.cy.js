import { faker } from '@faker-js/faker'
import _ from 'lodash'

describe('Expert', () => {

    beforeEach(() => {
        cy.start()
    })

    it('Manipular os atributos de elementos do HTML', () => {
        cy.log('toDo')

        cy.get('#email').invoke('val', 'papito@teste.com.br')

        cy.get('#password').invoke('attr', 'type', 'text')
            .type('senha123')

        cy.contains('button', 'Entrar')
            .invoke('hide')
            .should('not.be.visible')

        cy.contains('button', 'Entrar')
            .invoke('show')
            .should('be.visible')
    })

    it('Não deve logar com senha incorreta', () => {
        cy.submitLoginForm('papito@webdojo.com', 'katana321')

        cy.get('[data-sonner-toaster=true]')
            .should('be.visible')
            .as('toast')

        cy.get('@toast')
            .find('.title')
            .should('have.text', 'Acesso negado! Tente novamente.')

        cy.wait(5000)

        cy.get('@toast')
            .should('not.exist')
    })

    it('Simulando tecla TAB', () => {
        cy.get('body').press('Tab')
        cy.focused().should('have.attr', 'id', 'email')

        cy.get('#email').press('Tab')
        cy.focused().should('have.attr', 'id', 'password')
    })

    it.only('Simulando inclusão de dados fakes', () => {
        cy.log('todo')

        _.times(5, () => {

            const name = faker.person.fullName()
            const email = faker.internet.email()
            const password = 'pwd123'

            cy.log(name)
            cy.log(email)
            cy.log(password)
        })
        

    })

})