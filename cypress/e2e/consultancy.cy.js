describe('Formulário de consultoria', () => {
    it('Deve solicitar consultoria individual', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.goTo('Formulários', 'Consultoria')

        // cy.get('#name').type('Richard Soares')
        cy.get('input[placeholder="Digite seu nome completo"]').type('Richard Soares')
        // cy.get('#email').type('email_richard@gmail.com')
        cy.get('input[placeholder="Digite seu email"]').type('email_richard@gmail.com')
        // cy.get('#phone').type('19992320102')
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type('19999991000')
            .should('have.value', '(19) 99999-1000')

        //cy.get('#consultancyType').select('Individual')
        cy.contains('label', 'Tipo de Consultoria')
            .parent()
            .find('select')
            .select('Individual')

        //span[text()="Pessoa Física"]/..//input
        cy.contains('label', 'Pessoa Física')
            .find('input')
            .click()
            .should('be.checked')

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked')

        // cy.get('#document').type('00000000000')

        // cy.get('input[placeholder="000.000.000-00"]')
        //     .type('00000000000')
        //     .should('have.value', '000.000.000-00')

        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type('65602530070')
            .should('have.value', '656.025.300-70')

        const discoveryChannels = [
            'Instagram',
            'LinkedIn',
            'Udemy',
            'YouTube',
            'Indicação de Amigo'
        ]

        discoveryChannels.forEach((channel) => {
            cy.contains('label', channel)
                .find('input')
                .check()
                .should('be.checked')

        })



        // cy.get('#details').type('teste')

        // cy.get('#technologies').type('Cypress').click()

    })
})

