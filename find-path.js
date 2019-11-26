/*
    Find the Path

    Given an object which could be either Object or Array
    When i provide a value to test
    Then if found i should get the path to the value
    But if not found i should see 'not found'
*/
export default function findPath(object, value) {
  const memory = [];
  const getType = (object) => Array.isArray(object) ? 'array' : typeof object;
  const valueType = getType(value);
  const handler = {
    object: (object, path) => Object.keys(object).map((property, index) => {
      const objectType = getType(object[property]);
      const slot = {
        path: (() => {
          console.log('path: ', path, 'property: ', property);
          if (path) {
            return isNaN(property) ? path + '.' + property : path + '[' + property + ']';
          } else {
            return property
          }
        })(),
        matchValue: (() => {
          const currentValue = objectType === 'object' || objectType === 'array'
                              ? JSON.stringify(object[property])
                              : object[property];
          const query = valueType === 'object' || valueType === 'array'
                        ? JSON.stringify(value)
                        : value;

          return query === currentValue;
        })(),
      }

      memory.push(slot);

      if ( objectType === 'object' || objectType === 'array') {
        handler.object(object[property], slot.path);
      }
    }),
    array: (array, path) => array.map((object) => handler.object(object, path)),
  };

  handler[getType(object)](object);

  console.log('object: ', object, 'value: ', value);
  //console.log('memory: ', memory);
  //console.log('match: ', memory.find((slot) => slot.matchValue));

  const slot = memory.find((slot) => slot.matchValue);

  return slot ? slot.path : 'not found';
}
