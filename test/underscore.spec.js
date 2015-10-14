import chai from 'chai';
let expect = chai.expect;
chai.should();

import * as _ from '../src/underscore'

console.log(_);

describe('Underscore library', ()=>{

    describe('identity', ()=>{
      it('Should return the same value that has been passed', ()=>{
        expect(_.identity(1)).equal(1);
        expect(_.identity({})).to.deep.equal({});
        expect(_.identity("philos")).to.deep.equal("philos");
      })
    });

    describe('first', ()=>{

      let items = [1,9, 10, undefined];

      it('Should throw an error if nothing is passed', ()=>{
        ()=>{
          _.first();
        }.should.throw(Error);
      });

      it('Should return the first element of the collection', ()=>{
        expect(_.first(items)).equal(1);
      });

      it('Should return the first n elements when a second arguments is passed', ()=>{
        expect(_.first(items, 0)).equal(1);
        expect(_.first(items, 1)).to.deep.equal([1]);
        expect(_.first(items, 2)).to.deep.equal([1, 9]);
      })
    });
});
