import findPath from './find-path';


const myObject = {
  test: 1,
  test2: {
    val: 2,
    test3: ['test', 3]
  }
};

const tests = [
  {
    input: {
      object: myObject,
      query: 1,
    },
    want : 'test',
  },
  {
    input: {
      object: myObject,
      query: 2,
    },
    want : 'test2.val',
  },
  {
    input: {
      object: myObject,
      query: 3,
    },
    want : 'test2.test3[1]',
  },
  {
    input: {
      object: myObject,
      query: 'test',
    },
    want : 'test2.test3[0]',
  },
  {
    input: {
      object: myObject,
      query: ['test', 3],
    },
    want : 'test2.test3',
  },
  {
    input: {
      object: myObject,
      query: {val: 2},
    },
    want : 'not found',
  },
];

tests.forEach(({input, want}) => {
  const query = typeof input.query === 'object' ? JSON.stringify(input.query) : input.query;

  test(`finding ${query} through myObject the output must be ${want}`, () => {
    expect(findPath(input.object, input.query)).toMatch(want);
  });
});
