import { sum, mul } from "./simple_function";

describe("Simple function", () => {
  test("should sum 1 + 1", () => {
    const result = sum(1, 1);
    expect(result).toBe(2);
  });

  test("should multiply 2 * 2", () => {
    const result = mul(2, 2);
    expect(result).toBe(4);
  });
});
