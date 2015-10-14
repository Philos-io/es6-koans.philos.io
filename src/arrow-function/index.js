/**
 ** Represents a simple operation.
 ** @function
 ** @param {numbers} args -  List of numbers.
 ** @return {number} returnValue - sum of a list of numbers
 **/

export function add(){
  if(arguments.length < 2){
    throw new Error('You should pass at least 2 arguments');
  }

  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if(arguments[i])
      sum += arguments[i];
    else
      throw new Error('You can only sum numbers');
  }
  return sum;
}
