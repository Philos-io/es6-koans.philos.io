/**
 ** Represents a simple operation.
 ** @function
 ** @param {numbers} args -  List of numbers.
 ** @return {number} returnValue - sum of a list of numbers
 **/
let add = (...args) => {
  if (args.length < 2) {
    throw new Error('You should pass at least 2 arguments');
  }

  return args.reduce((x, y) => {
    if(!isNaN(x) && !isNaN(y))
      return x+y;
    else
      throw new Error('You can only sum numbers');
  });
}

export default add;

