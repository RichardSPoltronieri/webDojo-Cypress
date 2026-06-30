describe('Validações de alertas em javascript', () => {
    beforeEach(() => {
        cy.start()
        cy.login()
        cy.goTo('Alertas JS', 'JavaScript Alerts')
    });

    it('Deve validar a mensagem de alerta', () => {
        
        cy.on('window:alert', (msg) => {//verificando ação do navegador
            expect(msg).to.equal('Olá QA, eu sou uma Alert Box!')
        })
    
        cy.contains('button', 'Mostrar Alert').click()
    })

    it('Deve confirmar um diálogo e validar a resposta positiva', () => {
        cy.on('window:confirm', (msg) => {//verificando ação do navegador
            expect(msg).to.equal('Aperta um botão!')
            return true; //true simula o click no botão OK
        })

        cy.on('window:alert', (msg) => {//verificando ação do navegador
            expect(msg).to.equal('Você clicou em Ok!')
        })
    
        cy.contains('button', 'Mostrar Confirm').click()
    })

    it.only('Deve cancelar um diálogo e validar a resposta negativa', () => {
        cy.on('window:confirm', (msg) => {//verificando ação do navegador
            expect(msg).to.equal('Aperta um botão!')
            return false;
        })

        cy.on('window:alert', (msg) => {//verificando ação do navegador
            expect(msg).to.equal('Você cancelou!')
        })
    
        cy.contains('button', 'Mostrar Confirm').click()
    })
})