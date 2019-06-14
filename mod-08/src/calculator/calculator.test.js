import Calculator from "./calculator";

describe("The calculator", () => {
  let calc = null;

  beforeAll(() => {
    calc = new Calculator();
  });

  test("Add 1 + 2 = 3", function() {
    const sum = calc.add(1, 2);

    expect(sum).toBe(3);
  });

  test("Subtract 1 + 2 = 3", function() {
    const diff = calc.subtract(1, 2);

    expect(diff).toBe(-1);
  });

  test("Multiply 2 * 2 = 4", async function() {
    const result = await calc.multiply(2, 2);

    expect(result).toBe(4);
  });
});

test("compare objects", () => {
  const o = { x: 1, y: 2 };

  expect(o).toEqual({ y: 2, x: 1 });
});
