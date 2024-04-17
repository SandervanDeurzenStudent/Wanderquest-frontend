// Assume we have a simple function to test
function multiply(a, b) {
    return a * b;
}

// Test case using Jest
test('multiply 2 * 3 to equal 6', () => {
    // Arrange
    const num1 = 2;
    const num2 = 3;

    // Act
    const result = multiply(num1, num2);

    // Assert
    expect(result).toBe(6);
});
