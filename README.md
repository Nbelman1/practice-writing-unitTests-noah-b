INSTRUCTIONS

Implement and test a basic shopping cart module. The module should include the
following methods:
1. addItem(cart, item, quantity): Adds an item to the cart.
2. removeItem(cart, item): Removes an item from the cart.
3. getTotalItems(cart): Returns the total number of items in the cart.

TASKS
1. Define the Module:
○ Create a file named cart.js and define the required methods.
○ Export the methods using module.exports.
2. Write Unit Tests:
○ Create a tests folder and add a file named cart.test.js.
○ Write tests for each method in the cart.js module, covering:
■ Positive Tests: Valid inputs producing expected results.
■ Negative Tests: Invalid inputs handled gracefully.
■ Edge Cases: Unusual or extreme values.
3. Run the Tests:
○ Use npm test to execute the tests and verify that all pass.
4. Refactor:
○ If any tests fail, modify the implementation in cart.js to pass all tests.

EXAMPLE SCENARIOS FOR TESTING
1. addItem
○ Positive: Add a new item with a valid name and quantity.
○ Negative: Add an item with a negative quantity.
○ Edge Case: Add an item with a quantity of 0.
2. removeItem
○ Positive: Remove an existing item from the cart.
○ Negative: Attempt to remove an item not in the cart.
1
○ Edge Case: Remove the last item from the cart.
3. getTotalItems
○ Positive: Calculate the total number of items correctly.
○ Negative: Handle an empty cart.
○ Edge Case: Calculate with large quantities.