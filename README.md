# 🛒 Carrinho de Compras com Node.js

Projeto desenvolvido em **JavaScript utilizando Node.js**, simulando as funcionalidades básicas de um sistema de carrinho de compras.

A aplicação permite adicionar produtos ao carrinho e à lista de desejos, alterar quantidades, remover produtos e calcular o valor total da compra.

## 🚀 Funcionalidades

O projeto possui as seguintes funcionalidades:

- Adicionar itens ao carrinho
- Remover itens do carrinho
- Incrementar a quantidade de um produto
- Decrementar a quantidade de um produto
- Remover automaticamente um item quando sua quantidade chega a zero
- Calcular o valor total do carrinho
- Exibir os itens presentes no carrinho
- Adicionar e exibir itens em uma lista de desejos
- Calcular automaticamente o subtotal de cada produto

## 🛠️ Tecnologias utilizadas

- JavaScript
- Node.js
- ES Modules

## 📁 Estrutura do projeto

```text
├── index.js
├── package.json
└── services
    ├── cart.js
    └── item.js
```

### `index.js`

Arquivo principal da aplicação.

É responsável por:

- Criar o carrinho de compras
- Criar a lista de desejos
- Criar os produtos
- Adicionar produtos ao carrinho
- Alterar a quantidade dos produtos
- Exibir os itens
- Calcular o valor total da compra

### `services/cart.js`

Contém todas as funções responsáveis pelas operações do carrinho e da lista de desejos.

Principais funções:

- `addItem()`
- `removeItem()`
- `incrementItem()`
- `decrementItem()`
- `calculateTotal()`
- `displayCart()`
- `displayWishlist()`

### `services/item.js`

Responsável pela criação dos produtos.

Cada item possui:

- Nome
- Preço
- Quantidade
- Função para calcular o subtotal

## 📋 Exemplo de funcionamento

A aplicação cria produtos e permite realizar operações no carrinho.

```javascript
const item1 = await item.createItem("Hotwheels Ferrari", 20.99, 2);

await cartService.addItem(cart, item1);

await cartService.decrementItem(cart, item1.name);
```

Após decrementar a quantidade, o carrinho pode ser exibido e o valor total calculado.

Exemplo de saída:

```text
Bem-vindo ao carrinho de compras!

Itens na lista de desejos:
1. Hotwheels Lamborghini - Preço: R$25.99 - Quantidade: 2 - Subtotal: R$51.98

Itens no carrinho:
1. Hotwheels Ferrari - Preço: R$20.99 - Quantidade: 1 - Subtotal: R$20.99

Valor total do carrinho:
20.99
```

## 📚 Conceitos praticados

Durante o desenvolvimento deste projeto foram utilizados conceitos como:

- Modularização de código
- Importação e exportação de módulos
- Funções assíncronas
- Arrays
- Objetos
- Métodos de array
- Template literals
- Organização de código em serviços

## 🎯 Objetivo

O objetivo deste projeto é praticar conceitos fundamentais do **JavaScript e Node.js**, especialmente a organização do código utilizando módulos e a manipulação de dados para simular o funcionamento de um carrinho de compras.
