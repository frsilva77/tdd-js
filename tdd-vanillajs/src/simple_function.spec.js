import { sum } from "./simple_function";

describe("Simple function", () => {
  test("should sum 1 + 1", () => {
    const result = sum(1, 1);
    expect(result).toBe(2);
  });
});
