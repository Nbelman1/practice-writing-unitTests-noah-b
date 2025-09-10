// this file defines functions

let cart = [];

function addItem(cart, item, quantity) {
    for (let i = 0; i < quantity; i++) { // adds (quantity) number of items to cart
        cart.push(item);
    }
    return cart;
}

addItem(cart, "socks", 5);
addItem(cart, "shoes", 1);

function removeItem(cart, item) {
    while (cart.includes(item)) {
        let index = cart.indexOf(item);
        cart.splice(index, 1);
    }
    return cart;
}

removeItem(cart, "socks");

function getTotalItems(cart) {
    console.log(cart);
}

getTotalItems(cart);