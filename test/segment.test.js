const segment = require("../src");

test("First example, input:  (2,[8,2,4,6])", (done) => {
  const result = segment(2, [8, 2, 4, 6]);
  expect(result).toEqual(4);
  done();
});

test("Second example, input: (5,[1,2,3,1,2])", (done) => {
  const result = segment(1, [1, 2, 3, 1, 2]);
  expect(result).toEqual(3);
  done();
});

test("Thrid example, input:  (2,[1,1,1])", (done) => {
  const result = segment(2, [1, 1, 1]);
  expect(result).toEqual(1);
  done();
});

test("Fourth example, input:  (3,[2,5,4,6,8])", (done) => {
  const result = segment(3, [2, 5, 4, 6, 8]);
  expect(result).toEqual(4);
  done();
});
