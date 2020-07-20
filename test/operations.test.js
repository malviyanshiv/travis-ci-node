const { increament } = require("../src/operations");

test("testing increament with both arguments", () => {
    const result = increament(10, 5);
    expect(result).toBe(15);
});

test("testing increament with default increment value", () => {
    const result = increament(10);
    expect(result).toBe(11);
});
