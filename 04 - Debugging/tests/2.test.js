const getUniqueElements = require("../functions/2");

test("getUniqueElements returns an array with unique elements only", () => {
  expect(getUniqueElements([1, 2, 3, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(getUniqueElements(["a", "b", "a", "c", "d", "d"])).toEqual([
    "a",
    "b",
    "c",
    "d",
  ]);
});

test("getUniqueElements returns an empty array if the input array is empty", () => {
  expect(getUniqueElements([])).toEqual([]);
});

test("getUniqueElements maintains the order of elements in the input array", () => {
  expect(getUniqueElements([3, 2, 1, 1, 4, 2, 5])).toEqual([3, 2, 1, 4, 5]);
});
