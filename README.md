# WebDojo - Automação de Testes E2E com Cypress

## 📌 Sobre o Projeto

Este repositório contém a automação de testes End-to-End (E2E) da aplicação **WebDojo**, desenvolvida com o objetivo de validar o comportamento de diferentes componentes e fluxos da interface web.

O projeto foi construído utilizando o **Cypress** como framework principal de automação, seguindo boas práticas de organização dos testes, separação da massa de dados e reutilização de comandos.

---

## 🎯 Objetivo

O objetivo deste projeto é demonstrar uma estrutura escalável de automação de testes front-end, aplicando conceitos utilizados em projetos reais, como:

- Escrita de cenários E2E independentes;
- Separação de massa de testes através de fixtures;
- Reutilização de ações com Custom Commands;
- Organização de testes por funcionalidade;
- Validação de componentes complexos da interface;
- Simulação de interações reais do usuário.

---

## 🛠 Tecnologias Utilizadas

- JavaScript (ES6+)
- Cypress
- Cypress Real Events
- Node.js
- Yarn / NPM

---

## 📁 Estrutura do Projeto

```bash
WEB
│
├── cypress
│   │
│   ├── e2e                     # Cenários automatizados
│   │   ├── consultancy.cy.js   # Testes de formulário de consultoria
│   │   ├── drop.cy.js          # Testes de drag and drop
│   │   ├── hover.cy.js         # Testes de eventos de hover
│   │   ├── iframe.cy.js        # Testes envolvendo iframes
│   │   ├── links.cy.js         # Validação de links e navegação
│   │   ├── login.cy.js         # Cenários de autenticação
│   │   ├── studio.cy.js        # Cenários criados utilizando Cypress Studio
│   │   └── super.consultancy.cy.js # Cenários avançados de consultoria
│   │
│   ├── fixtures                # Massa de dados e arquivos utilizados nos testes
│   │   ├── consultancy.json
│   │   ├── document.pdf
│   │   └── example.json
│   │
│   ├── downloads               # Arquivos baixados durante as execuções
│   │
│   ├── screenshots             # Evidências geradas em caso de falha
│   │
│   └── support
│       ├── commands.js         # Custom Commands
│       └── e2e.js              # Configurações globais dos testes
│
├── cypress.config.js           # Configuração principal do Cypress
├── package.json                # Dependências e scripts do projeto
└── package-lock.json           # Controle das versões das dependências
```

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado:

- Node.js 18 ou superior
- NPM ou Yarn

---

## 🚀 Instalação

Clone o repositório:

```bash
git clone git@github.com:RichardSPoltronieri/webDojo-Cypress.git
```

Acesse a pasta do projeto:

```bash
cd webDojo-Cypress
```

Instale as dependências:

```bash
npm install
```

ou

```bash
yarn install
```

---

## ▶️ Executando a Aplicação

Este projeto utiliza o pacote **serve** para disponibilizar a aplicação localmente.

Execute:

```bash
npm run dev
```

A aplicação ficará disponível em:

```
http://localhost:3000
```

---

## 🧪 Executando os Testes

### Abrir o Cypress em modo interativo

```bash
npx cypress open
```

Com a interface do Cypress aberta, selecione o cenário desejado para execução.

---

### Executar todos os testes em modo headless

```bash
npx cypress run
```

---

### Executar um cenário específico

Exemplo executando apenas o teste de login:

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

---

## 🧩 Massa de Dados

Os testes utilizam o diretório `fixtures` para armazenar dados externos, facilitando a manutenção e permitindo a reutilização entre diferentes cenários.

Exemplos de utilização:

- Dados de formulários em formato JSON;
- Arquivos utilizados em upload;
- Objetos de teste reutilizáveis.

---

## 🔁 Custom Commands

Comandos personalizados foram centralizados no arquivo:

```bash
cypress/support/commands.js
```

Essa abordagem reduz duplicação de código e melhora a legibilidade dos cenários de teste.

---

## 🎯 Cenários Automatizados

Atualmente o projeto possui cobertura para os seguintes cenários:

| Funcionalidade | Descrição |
|---|---|
| Login | Validação de autenticação e comportamento da tela de login |
| Formulários | Preenchimento e validação de formulários de consultoria |
| Upload | Envio de documentos através da interface |
| Drag and Drop | Interações de arrastar e soltar elementos |
| Hover | Validação de elementos acionados pelo mouse |
| Iframes | Interações com conteúdos embarcados |
| Navegação | Validação de links e redirecionamentos |

---

## 🧱 Boas práticas aplicadas

Este projeto segue algumas práticas comuns em automação de testes:

- Separação entre cenários e massa de dados;
- Utilização de fixtures para tornar os testes mais manuteníveis;
- Reaproveitamento de ações por meio de Custom Commands;
- Organização dos testes por contexto de negócio;
- Uso de interações reais com o usuário através do `cypress-real-events`;
- Estrutura preparada para crescimento e inclusão de novos cenários.

---

## 📈 Melhorias futuras

Possíveis evoluções para o projeto:

- Implementação de Page Object Model (POM);
- Integração com pipelines CI/CD;
- Geração de relatórios de execução;
- Execução paralela dos testes;
- Integração com ferramentas de qualidade de código.

---

## 👨‍💻 Autor

Desenvolvido por **Richard Soares**

Quality Assurance Engineer focado em automação de testes, qualidade de software e melhoria contínua.

GitHub:
https://github.com/RichardSPoltronieri
