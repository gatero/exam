/*
    Find the Path

    Given an object which could be either Object or Array
    When i provide a value to test
    Then if found i should get the path to the value
    But if not found i should see 'not found'
*/
export default function findPath(object, value) {
  let path;
  let found;

 	const findValue = (object, value) => {
  	for (const key in object) {
    	const currentValue = object[key];
    	const isObject = typeof currentValue === 'object';
      const isArray = Array.isArray(currentValue);
    	const isEqual = isObject && isArray
                      ? JSON.stringify(currentValue) === JSON.stringify(value)
                      : currentValue === value;
      if (!path) {
        path = key;
      } else {
      	if (isObject || isEqual) {
        	path += isNaN(key) ? '.' + key : '[' + key + ']';
        }
      }

      if (isEqual) {
      	found = true;
      	break;
      }

      if (isObject) {
      	findValue(currentValue, value);
      }
    }
  };

  findValue(object, value);

  let chunks = path.split('.');

  while (chunks.length > 2) {
  	chunks.shift();
  }

  path = chunks.join('.');

  return found ? path : 'not found';
}
