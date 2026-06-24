describe('Formulário de consultoria', () => {
    beforeEach(() => {
        cy.start()
        cy.login()
        cy.goTo('Formulários', 'Consultoria')
    });

    it('Deve solicitar consultoria individual', () => {

        const consultancyForm = {
            name: 'Richard Soares',
            email: 'email_richard@gmail.com',
            phone: '(19) 99999-1000',
            consultancyType: 'Individual',
            personType: 'cpf',
            document: '65602530070',
            discoveryChannels: [
                'Instagram',
                'LinkedIn',
                'Udemy',
                'YouTube',
                'Indicação de Amigo'
            ],
            file: './cypress/fixtures/document.pdf',
            description: 'Integer vehicula gravida justo, vitae laoreet erat auctor sed. Maecenas sed dictum sem. Etiam nec sodales tortor, sit amet vehicula augue.',
            techs: [
                'Cypress',
                'Selenium',
                'WebDriverIO',
                'Robot Framework'
            ],
            terms: true
        }

        cy.get('input[placeholder="Digite seu nome completo"]').type(consultancyForm.name)
        cy.get('input[placeholder="Digite seu email"]').type(consultancyForm.email)
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type(consultancyForm.phone)

        cy.contains('label', 'Tipo de Consultoria')
            .parent()
            .find('select')
            .select(consultancyForm.consultancyType)

        if (consultancyForm.personType === 'cpf') {
            cy.contains('label', 'Pessoa Física')
                .find('input')
                .click()
                .should('be.checked')

            cy.contains('label', 'Pessoa Jurídica')
                .find('input')
                .should('be.not.checked')
        }

        if (consultancyForm.personType === 'cnpj') {
            cy.contains('label', 'Pessoa Jurídica')
                .find('input')
                .click()
                .should('be.checked')

            cy.contains('label', 'Pessoa Física')
                .find('input')
                .should('be.not.checked')
        }

        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type(consultancyForm.document)

        consultancyForm.discoveryChannels.forEach((channel) => {
            cy.contains('label', channel)
                .find('input')
                .check()
                .should('be.checked')
        })

        cy.get('input[type="file"]') // fazendo upload de arquivo
            .selectFile(consultancyForm.file, { force: true }) //caminho relativo e o force serve pq o botão está hidden

        cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
            .type(consultancyForm.description)

        consultancyForm.techs.forEach((tech) => {
            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
                .type(tech)
                .type('{enter}')

            cy.contains('label', 'Tecnologias')
                .parent()
                .contains('span', tech)
                .should('be.visible')
        })

        if (consultancyForm.terms === true) {
            cy.contains('label', 'termos de uso')
                .find('input')
                .check()
        }


        cy.contains('button', 'Enviar formulário')
            .click()


        cy.get('.modal', { timeout: 7000 })
            .should('be.visible')
            .find('.modal-content')
            .should('be.visible')
            .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
    })

    it('Deve solicitar consultoria in Company', () => {

        const consultancyForm = {
            name: 'Richard Soares',
            email: 'email_richard@gmail.com',
            phone: '(19) 99999-1000',
            consultancyType: 'In Company',
            personType: 'cnpj',
            document: '33810761000168',
            discoveryChannels: [
                'LinkedIn',
            ],
            file: './cypress/fixtures/document.pdf',
            description: 'Integer vehicula gravida justo, vitae laoreet erat auctor sed. Maecenas sed dictum sem. Etiam nec sodales tortor, sit amet vehicula augue.',
            techs: [
                'Cypress',
                'Robot Framework'
            ],
            terms: true
        }

        cy.get('input[placeholder="Digite seu nome completo"]').type(consultancyForm.name)
        cy.get('input[placeholder="Digite seu email"]').type(consultancyForm.email)
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type(consultancyForm.phone)

        cy.contains('label', 'Tipo de Consultoria')
            .parent()
            .find('select')
            .select(consultancyForm.consultancyType)

        if (consultancyForm.personType === 'cpf') {
            cy.contains('label', 'Pessoa Física')
                .find('input')
                .click()
                .should('be.checked')

            cy.contains('label', 'Pessoa Jurídica')
                .find('input')
                .should('be.not.checked')
        }

        if (consultancyForm.personType === 'cnpj') {
            cy.contains('label', 'Pessoa Jurídica')
                .find('input')
                .click()
                .should('be.checked')

            cy.contains('label', 'Pessoa Física')
                .find('input')
                .should('be.not.checked')
        }

        cy.contains('label', 'CNPJ')
            .parent()
            .find('input')
            .type(consultancyForm.document)

        consultancyForm.discoveryChannels.forEach((channel) => {
            cy.contains('label', channel)
                .find('input')
                .check()
                .should('be.checked')
        })

        cy.get('input[type="file"]') // fazendo upload de arquivo
            .selectFile(consultancyForm.file, { force: true }) //caminho relativo e o force serve pq o botão está hidden

        cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
            .type(consultancyForm.description)

        consultancyForm.techs.forEach((tech) => {
            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
                .type(tech)
                .type('{enter}')

            cy.contains('label', 'Tecnologias')
                .parent()
                .contains('span', tech)
                .should('be.visible')
        })

        if (consultancyForm.terms === true) {
            cy.contains('label', 'termos de uso')
                .find('input')
                .check()
        }

        cy.contains('button', 'Enviar formulário')
            .click()

        cy.get('.modal', { timeout: 7000 })
            .should('be.visible')
            .find('.modal-content')
            .should('be.visible')
            .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
    })

    it('Deve verificar os campos obrigatórios', () => {
        cy.contains('button', 'Enviar formulário')
            .click()

        cy.contains('label', 'Nome Completo')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Campo obrigatório')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')

        cy.contains('label', 'Email')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Campo obrigatório')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')

        cy.contains('label', 'termos de uso')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Você precisa aceitar os termos de uso')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')
    })
})

