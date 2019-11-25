/*
    The closest result

    Given two arrays of numbers
    When you get a number as value
    Then you should find the closest pair of numbers which added get the closest result to the number provided
    Precondition:
    Arrays can have different length
    All numbers are integers
    Pairs of numbers come from Array1[i] + Array2[i]
    Example:
*/
export default function getClosestResult(arr1, arr2, value) {
  let num1, num2;
  let memory = [];
  let results = [];
  let result;

  if (!arr1) {
    return 'first argument can not be empty';
  }

  if (!arr2) {
    return 'second argument can not be empty';
  }

  if (!value) {
    return 'third argument can not be empty';
  }

  arr1.forEach((n1) => arr2.forEach((n2) => (
    memory.push((n1 + n2) + ':' + n1 + ':' + n2)
    && results.push(n1 + n2)
  )));

  results = results.sort((a, b) => a - b);
  result = results.find((result) => result === value);

  if (!result) {
    for (let num = value; num >= 0; num--) {
      if (results.indexOf(num) >= 0) {
        result = num;
        break;
      }
    }
    if (!result) {
      for (let num = 0; num <= Math.max(...results); num++) {
        if (results.indexOf(num) >= 0) {
          result = num;
          break;
        }
      }
    }
  }

  if (result) {
    const regexp = result ? new RegExp(`^${result}:`) : '';
    const data = memory.find((slot) => regexp.test(slot)).split(':');

    num1 = data[1];
    num2 = data[2];
  }

  return num1 +' + '+ num2 + ' is the closest';
}
