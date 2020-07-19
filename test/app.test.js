const { increament } = require("../src/app");

test("testing increament with both arguments", () => {
    const result = increament(10, 5);
    expect(result).toBe(15);
});
