# Star Wars Planets Search

Este é um projeto de desenvolvimento de uma lista com filtros de planetas do universo de Star Wars usando Context API e Hooks para controlar os estados globais. O objetivo é utilizar a Context API do React para gerenciar o estado, bem como os React Hooks useState, useContext e useEffect. Além disso, serão criados React Hooks customizados para facilitar a manipulação do estado.

## Funcionalidades

- Requisição para o endpoint /planets da API de Star Wars e preenchimento de uma tabela com os dados retornados, com exceção dos dados da coluna residents.
- Filtro de texto para a tabela.
- Filtro para valores numéricos.
- Implementação de múltiplos filtros numéricos.
- Desenvolvimento de testes para atingir 30% de cobertura total da aplicação.
- Não utilização de filtros repetidos.
- Remoção de um filtro de valor numérico ao clicar no ícone de "X" de um dos filtros.
- Remoção simultânea de todas as filtragens numéricas ao clicar em outro botão de "Remover todas filtragens".
- Desenvolvimento de testes para atingir 60% de cobertura total da aplicação.

## Execução e Testes

Para executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório para a sua máquina local.
2. Abra o terminal na pasta raiz do projeto.
3. Execute o comando `npm install` para instalar as dependências.
4. Execute o comando `npm start` para iniciar o servidor de desenvolvimento.

Para executar os testes e verificar a cobertura de testes, utilize os seguintes comandos:

- `npm test App.test.js`: Executa os testes unitários.
- `npm run test-coverage`: Exibe o percentual da cobertura de testes.
- `npm run test-coverage -- --collectCoverageFrom=<caminho/do/arquivo>`: Verifica a cobertura de testes específica de um arquivo. Substitua `<caminho/do/arquivo>` pelo caminho do arquivo desejado.

## Linter e Stylelint

Neste projeto, utilizamos o linter ESLint e o Stylelint para garantir a qualidade do código. Você pode rodar o linter localmente no seu projeto executando os seguintes comandos:

- `npm run lint`: Executa o ESLint para verificar erros e avisos de linting no código JavaScript/TypeScript.
- `npm run lint:styles`: Executa o Stylelint para verificar erros e avisos de linting no código CSS/SCSS.

Certifique-se de corrigir todos os erros e avisos de linting antes de fazer o commit das suas alterações.

## Considerações Finais

Este projeto foi desenvolvido com o intuito de praticar o uso da Context API e Hooks no React, bem como a escrita de testes unitários. Esperamos que você possa explorar e aprimorar as funcionalidades, além de contribuir para a evolução do projeto.

Caso tenha alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato conosco. Aproveite a busca pelos planetas do universo de Star Wars!

Que a Força esteja com você!