
// TODO: Implement these functions and export them using ES6 module system

/**
** @author {your name}
** @function
** @param {array}
** @return
**/
export function identity(value){
  return value;
}


/**
** @author {your name}
** @function
** @param {array}
** @return
**/
export function first(collection, n = 0){
  if (arguments.length === 0) {
    throw new Error();
  }

  return n > 0? collection.slice(0, n): collection[n];
}

/**
** @author {your name}
** @function
** @param {array}
** @return
**/
export function last(collection, n = 0){
  if(arguments.length === 0){
    throw new Error();
  }
  return n > 0 ? collection.slice(-n): collection[collection.length - 1];
}

/**
** @author {your name}
** @function
** @param {array}
** @return
**/
export function forEach(collection, callback){
  let result = [];
  for (let i = 0; i < collection.length; i++) {
    result.push(callback(collection[i], i, collection));
  }
  return result;
}

/**
** @author {your name}
** @function
** @param {array}
** @return {array}
**/
export function map(collection, callback){
  let result = [];
  forEach(collection, (item, index, collection) => {
    result.push(callback(item, index, collection));
  });
  return result;
}

/**
** @author {your name}
** @function
** @param {array}
** @return {object} or {undefined}
**/
export function find(collection, predicate){

}

/**
** @author {your name}
** @function
** @param {array}
** @return {array}
**/
function findIndex(collection, predicate){

}

/**
** @author {your name}
** @function
** @param {array}
** @return {array}
**/
function fill(collection, predicate){

}

/**
** @author {your name}
** @function
** @param {array}
** @return {array}
**/
function keys(collection){

}

/**
** @author {your name}
** @function
** @param {array}
** @return {array}
**/
function values(collection){

}

/**
** @author {your name}
** @function
** @param
** @return
**/
function find(collection){

}

/**
** @author {your name}
** @function
** @param
** @return
**/
function entries(collection){

}
