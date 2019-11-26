/*
    Find the Path

    Given an object which could be either Object or Array
    When i provide a value to test
    Then if found i should get the path to the value
    But if not found i should see 'not found'
*/
export default function findPath(object, value) {
  if (object === undefined) {
    return 'object param can not be empty';
  }
  if (value === undefined) {
    return 'value param can not be empty';
  }
  const memory = [];
  const getType = (object) => Array.isArray(object) ? 'array' : typeof object;
  const valueType = getType(value);

  const getRawValue = (value) => (
    getType(value) === 'object' || getType(value) === 'array'
    ? JSON.stringify(value)
    : value
  )
  const rawValue = getRawValue(value);

  const handler = {
    object: (object, path, objectMatch) => (
      object
      ? Object.keys(object).map((property, index) => {
        const objectType = getType(object[property]);
        const slot = {
          path: (() => (
            path == undefined
            ? property
            : isNaN(path)
              ? isNaN(property)
                ? path + '.' + property
                : path + '[' + property + ']'
              : objectMatch
                ? '[' + path + ']'
                : '[' + path + '].' + property

          ))(),
          matchValue: (() => (
            objectMatch
            ? objectMatch
            : rawValue === getRawValue(object[property])
          ))(),
        }

        memory.push(slot);

        if ( objectType === 'object' || objectType === 'array') {
          handler.object(object[property], slot.path);
        }
      })
      : null
    ),
    array: (array, path) => array.map((object, index) => {
      const objectMatch = rawValue === getRawValue(object);
      path = path || index;

      return handler.object(object, path, objectMatch);
    })
  };

  handler[getType(object)](object);

  const slot = memory.find((slot) => slot.matchValue);

  return slot ? slot.path : 'not found';
}
