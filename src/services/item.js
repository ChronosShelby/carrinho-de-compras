// Casos de uso

// Criar item com o subtotal certo
async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal() {
      return this.price * this.quantity;
    },
  };
}

export default { createItem };
