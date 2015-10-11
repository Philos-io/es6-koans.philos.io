import chai from 'chai';
import sinon from 'sinon';
let expect = chai.expect;
chai.should();

import {add} from '../arrow-function/index.js';

// You can find more information about arrow-function mdn by following the link below
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

describe('Arrow function', () => {
  describe('Add, sum...', () => {

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

    it('Should return 5 when passing 2 and 3', ()=>{
      add(2,3).should.equal(5);
    });

    it('Should throw an error if only one argument is passed', ()=>{
        () => {
          add(2)
        }.should.throw();
    });

    it('Should accept more than 3 arguments', ()=>{
      add(1,2,3,4).should.equal(10);
    });

    it('Should throw an error if any of the arguments is not a number', ()=>{
        () => {
          add(2, undefined, '2', 10);
        }.should.throw();
    });
  });
});
