//Quais ações o carrinho pode realizar

//Adicionar item
async function addItem(userCart, item) {
  userCart.push(item);
}

//Remover item
async function removeItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

//Incrementar quantidade
async function incrementItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart[index].quantity += 1;
  }
}

//Decrementar quantidade
async function decrementItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart[index].quantity -= 1;
    if (userCart[index].quantity <= 0) {
      userCart.splice(index, 1);
    }
  }
}

//Calcular total
async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(result);
}

//Mostrar itens do carrinho
async function displayCart(userCart) {
  console.log("\nItens no carrinho:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - Preço: R$${item.price.toFixed(2)} - Quantidade: ${item.quantity} - Subtotal: R$${item.subtotal().toFixed(2)}`,
    );
  });
}

//Mostrar itens da lista de desejos
async function displayWishlist(userWishlist) {
  console.log("\nItens na lista de desejos:");
  userWishlist.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - Preço: R$${item.price.toFixed(2)} - Quantidade: ${item.quantity} - Subtotal: R$${item.subtotal().toFixed(2)}`,
    );
  });
}

export {
  addItem,
  removeItem,
  incrementItem,
  decrementItem,
  calculateTotal,
  displayCart,
  displayWishlist,
};
