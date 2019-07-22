import calc from "../../practice/6kyu/Reverse_polish_notation_calculator";

test("reverse polish notation caculator", () => {
  expect(calc("")).toBe(0);
  expect(calc("3")).toBe(3);
  expect(calc("3.5")).toBe(3.5);
  expect(calc("1 3 +")).toBe(4);
  expect(calc("1 3 *")).toBe(3);
  expect(calc("1 3 -")).toBe(-2);
  expect(calc("4 2 /")).toBe(2);
});
