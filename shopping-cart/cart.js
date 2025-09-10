// module file

function addItem(cart, item, quantity) {
    if (quantity < 1) {
        return "Please enter a quantity greater than 1.";
    } else if (item === "") {
        return "Please enter a valid item name.";
    } else {
        for (let i = 0; i < quantity; i++) { // adds (quantity) number of items to cart
            cart.push(item);
        }
        return cart; 
    }
}

function removeItem(cart, item) {
    if (!cart.includes(item)) {
        return "Error: cart does not contain item.";
    }
    while (cart.includes(item)) {
        let index = cart.indexOf(item);
        cart.splice(index, 1);
    }
    return cart;
}

function getTotalItems(cart) {
    return cart.length;
}

module.exports = {
    addItem, removeItem, getTotalItems
}