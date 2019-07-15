import getCount from "../../practice/7kyu/Vowel_Count";

test("Vowel Count", () => {
  expect(getCount("abracadabra")).toBe(5);
  expect(getCount("pear tree")).toBe(4);
  expect(getCount("o a kak ushakov lil vo kashu kakao")).toBe(13);
  expect(getCount("my pyx")).toBe(0);
});
