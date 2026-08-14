import * as cartService from "./services/cart.js";
import item from "./services/item.js";

const cart = [];
const myWishlist = [];

console.log("Bem-vindo ao carrinho de compras!");

const item1 = await item.createItem("Hotwheels Ferrari", 20.99, 2);

const item2 = await item.createItem("Hotwheels Lamborghini", 25.99, 2);

await cartService.addItem(cart, item1);
await cartService.addItem(myWishlist, item2);

await cartService.decrementItem(cart, item1.name);

await cartService.displayWishlist(myWishlist);
await cartService.displayCart(cart);

console.log("\nValor total do carrinho:");
await cartService.calculateTotal(cart);
