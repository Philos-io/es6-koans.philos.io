export function identity(value){
    return value;
}


export function first(list, n = 0){

  console.log(n);
  if(!list) throw new Error();

  if(n===0) return list[0];

  if(n>0) return list.slice(0, n);
}

export function last(list, n = 0){

}

export function forEach(list, callback){
  let result = [];

  for (var i = 0; i < list.length; i++) {
    callback(list[i], i, list);
  }

  return result;
}
