
export default sum;

let sum = (...args) => {

  if (args.length < 2) {
    throw new Error();
  }

  var cumul = 0;
  for(var i=0; i<args.length; i++) {
    var num = args[i];

    if (isNaN(num)) {
      throw new Error();
    }
    cumul+=num;
  }
  return cumul;
}
