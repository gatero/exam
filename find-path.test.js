import findPath from './find-path';


const myObject = {
  test: 1,
  test2: {
    val: 2,
    test3: ['test', 3]
  }
};

const myObject2 = {
  ...myObject,
  test4: null
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
  {
    input: {
      object: [myObject],
      query: ['test', 3],
    },
    want : '[0].test2.test3',
  },
  {
    input: {
      object: [myObject],
      query: myObject,
    },
    want : '[0]',
  },
  {
    input: {
      object: myObject2,
      query: 2,
    },
    want : 'test2.val',
  },
  {
    input: {
      object: myObject2,
      query: 3,
    },
    want : 'test2.test3[1]',
  },
  {
    input: {
      object: myObject2,
      query: 'test',
    },
    want : 'test2.test3[0]',
  },
  {
    input: {
      object: myObject2,
      query: ['test', 3],
    },
    want : 'test2.test3',
  },
  {
    input: {
      object: undefined,
      query: ['test', 3],
    },
    want : 'object param can not be empty',
  },
  {
    input: {
      object: myObject2,
      query: undefined,
    },
    want : 'value param can not be empty',
  },
];

describe('Testing suit for findPath function', () => {
  tests.forEach(({input, want}) => {
    const query = typeof input.query === 'object' ? JSON.stringify(input.query) : input.query;

    test(`finding ${query} through myObject the output must be ${want}`, () => {
      expect(findPath(input.object, input.query)).toMatch(want);
    });
  });
});
