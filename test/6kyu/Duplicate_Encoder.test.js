const duplicateEncode = require("../../practice/6kyu/Duplicate_Encoder");

test("should ignore case", () => {
  expect(duplicateEncode("din")).toBe("(((");
  expect(duplicateEncode("recede")).toBe("()()()");
  expect(duplicateEncode("Success")).toBe(")())())");
  expect(duplicateEncode("(( @")).toBe("))((");
});
