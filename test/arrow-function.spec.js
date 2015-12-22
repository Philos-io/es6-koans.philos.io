import chai from 'chai';
import sinon from 'sinon';
let expect = chai.expect;
chai.should();

// You can implement your solution in another file or inline here

// You can find more information about arrow-function mdn by following the link below
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


xdescribe('Arrow function', () => {
  describe('Add or Sum function...', () => {
    it('Should return 5 when passing 2 and 3', ()=>{
      add(2,3).should.equal(5);
    });

    it('Should throw an error if only one argument is passed', ()=>{
        () => {
          add(2)
        }.should.throw();
    });

    it('Should accept more than 2 arguments', ()=>{
      add(1,2,3,4).should.equal(10);
    });

    it('Should throw an error if any of the arguments is not a number', ()=>{
        () => {
          add(2, undefined, '2', 10);
        }.should.throw();
    });
  });

  describe('Lexical this', ()=>{
    it('Should return the list of fruits', ()=>{
      var cart = {
        owner: 'Davy',
        fruits: ['apple', 'brussels sprout', 'banana', 'mango'],
        printFruits: function() {
          this.fruits.forEach(function(f){
            console.log(this.owner + " bought " + f)
          });
        }
      };
    });
  });
});
