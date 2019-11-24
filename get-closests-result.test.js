import getClosestResult from './get-closests-result';

const arr1 = [ 1, 2, 3, 23, 5, 6, 8 ];
const arr2 = [ 5, 15, 10, 78, 23, 90, 23, 56 ];

const tests = [
  {
    input: {
      arr1: arr1,
      arr2: arr2,
      query: 7,
    },
    want: '2 + 5 is the closest',
  },
  {
    input: {
      arr1: arr1,
      arr2: arr2,
      query: 4,
    },
    want: '1 + 5 is the closest',
  },
  {
    input: {
      arr1: arr1,
      arr2: arr2,
      query: 14,
    },
    want: '3 + 10 is the closest',
  },
  {
    input: {
      arr1: arr1,
      arr2: arr2,
      query: 16,
    },
    want: '1 + 15 is the closest',
  },
  {
    input: {
      arr1: arr1,
      arr2: arr2,
      query: 99,
    },
    want: '8 + 90 is the closest',
  },
];

tests.forEach(({input, want}) => {
  const query = typeof input.query === 'object' ? JSON.stringify(input.query) : input.query;

  test(`finding the closest number to ${query} through two arrays the output must be ${want}`, () => {
    expect(getClosestResult(input.arr1, input.arr2, input.query)).toMatch(want);
  });
});
