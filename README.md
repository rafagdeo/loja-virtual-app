# Teste Frontend React Developer

Este projeto é um aplicativo simples de loja online desenvolvido em React, simulando o consumo de uma API REST utilizando o JSON Server com o arquivo dbTeste.json. 
O objetivo é listar produtos, exibir detalhes individuais, permitir adicionar/remover itens do carrinho e mostrar um resumo antes de finalizar a compra.

(sem muito apego ao design e sim a funcionalidade)

## Funcionalidades
- Listagem de produtos da loja
- Visualização individual de cada produto
- Adição e remoção de produtos no carrinho
- Resumo do carrinho com quantidade, subtotal e total
- Finalização de compra com alerta de confirmação
- Responsividade para desktop e mobile

## Tecnologias utilizadas
- React
- React Router DOM
- JSON Server
- Tailwind CSS
- React Icons

## Como rodar o projeto
Clone o repositório
- No terminal coloque: git clone https://github.com/rafagdeo/loja-virtual-app.git
- Vá até o projeto com: cd loja-virtual

Instale as dependências
- No terminal digite: npm install

Inicie o JSON Server
- Rode o JSON Server em outra aba do terminal: npx json-server --watch dbTeste.json --port 3001
- A API estará disponível em: http://localhost:3001/produtos

Inicie o projeto
- No terminal digite: npm start
- O projeto estará disponível em: http://localhost:3000

Enjoy
