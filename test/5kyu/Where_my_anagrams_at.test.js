import anagrams from "../../practice/5kyu/Where_my_anagrams_at";

test("Where my anagrams at", () => {
  expect(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])).toStrictEqual(["aabb", "bbaa"]);
  expect(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])).toStrictEqual([
    "carer",
    "racer"
  ]);
  expect(anagrams("laser", ["lazing", "lazy", "lacer"])).toStrictEqual([]);
});
