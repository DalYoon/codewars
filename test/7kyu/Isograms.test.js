import isIsogram from "../../practice/7kyu/Isograms";

test("is isogram", () => {
  expect(isIsogram("Dermatoglyphics")).toBe(true);
  expect(isIsogram("isogram")).toBe(true);
  expect(isIsogram("aba")).toBe(false);
  expect(isIsogram("moOse")).toBe(false);
  expect(isIsogram("isIsogram")).toBe(false);
  expect(isIsogram("")).toBe(true);
});
