 // using closure
let _fullName = null;

/**
 ** Class Human.
 ** @class
 ** @param {numbers} args -  List of numbers.
 **/
export default class Human{
  constructor({fullName}){
    this.fullName = fullName;
  }

  static inject = [];

  get fullName(){
    return _fullName;
  }

  set fullName(value){
    if (typeof value !== 'string') {
      throw new Error('fullName should be a string');
    }

    _fullName = value;
    // this.fullName = value;
  }

  Walk(){}
}
