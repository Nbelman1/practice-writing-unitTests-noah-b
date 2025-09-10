const cart = require("../shopping-cart/cart.js");

// declaring empty array
let myCart = [];

// empties cart before each test
beforeEach(() => {
    myCart = [];
});

// testing addItem()
describe("addItem", function() {

    // positive case
    test("should add simple string with quantity greater than 1", function() {
        expect(cart.addItem(myCart, "socks", 4)).toEqual(["socks", "socks", "socks", "socks"]); 
        // toEqual checks if content of arrays are equal
    });

    // negative case
    test("should handle negative quantities gracefully", function() {
        expect(cart.addItem(myCart, "socks", -1)).toBe("Please enter a quantity greater than 1.");
        // can use toBe because we expect deep equality
    });

    // edge case
    test("should handle empty strings gracefully", function() {
        expect(cart.addItem(myCart, "", 10)).toBe("Please enter a valid item name.");
    });

});

// testing removeItem()
describe("removeItem", function() {

    // positive case
    test("should remove existing item from cart", function(){
        myCart = ["socks", "socks", "socks", "shoes"];
        expect(cart.removeItem(myCart, "socks")).toEqual(["shoes"]);
    });

    // negative case
    test("should gracefully handle trying to remove item not in cart", function(){
        myCart = ["socks", "socks", "socks", "shoes"];
        expect(cart.removeItem(myCart, "sock")).toBe("Error: cart does not contain item.");
    });

    // edge case
    test("should remove last item in cart", function() {
        myCart = ["socks", "socks", "socks", "shoes"];
        expect(cart.removeItem(myCart, "shoes")).toEqual(["socks", "socks", "socks"]);
    });

});

describe("getTotalItems", function() {

    // positive case 
    test("should count number of items correctly", function() {
        myCart = ["socks", "socks", "socks", "shoes", "shirt", "shirt"];
        expect(cart.getTotalItems(myCart)).toBe(6);
    });

    // negative case
    test("should handle an empty cart", function() {
        // uses empty cart from beforeEach in line 8
        expect(cart.getTotalItems(myCart)).toBe(0);
    });

    // edge case
    test("should correctly calculate large quantities", function() {
        cart.addItem(myCart, "socks", 15);
        cart.addItem(myCart, "shoes", 17);
        cart.addItem(myCart, "shirts", 90); // items total = 122
        expect(cart.getTotalItems(myCart)).toBe(122);
    });

});