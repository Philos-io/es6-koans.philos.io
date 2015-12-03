// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
//
// http://koajs.com/
//
let numbers = [1,3,6, 8];

let result = (function*() {
  for (let i of numbers) {
    yield i * i;
  }
})()

console.log(result)


//
// console.log(result);
//
// function *foo() {
//     yield 1;
//     return 2;
// }
//
// let func = foo();
//
// console.log(func.next())
// console.log(func.next())
//
// Issue with return
// let result = [];
// for (let item of foo()) {
//   result.push(item);
// }
// console.log(result)

// yield vs yield*
// function* func(){
//   yield ["a", "b", "c"];
// }
//
// function* func(){
//   yield* ["a", "b", "c"];
// }

// Turning anything into an iterable object
// var iterable = {}
// iterable[Symbol.iterator] = function* () {
//     yield 1;
//     yield 2;
//     yield 3;
// };

// let Customers = {};
//
// Customers[Symbol.iterator] = function*(){
//     yield* ['davy', 'max', 'medhi'];
// };
//
//
// console.log([...Customers])
//
