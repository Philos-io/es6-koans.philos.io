import chai from 'chai';
import sinon from 'sinon';
const expect = chai.expect;
chai.should();

import * as _ from '../src/underscore/index';

describe('Underscore library', ()=>{

    describe('identity', ()=>{
      it('Should return the same value that has been passed', ()=>{
        expect(_.identity(1)).equal(1);
        expect(_.identity({})).to.deep.equal({});
        expect(_.identity('philos')).to.deep.equal('philos');
      })
    });

    describe('first: does not mutate the collection', ()=>{

      const items = [1,9, 10, undefined];

      it('Should throw an error if no argument is passed', ()=>{
        ()=>{
          _.first();
        }.should.throw(Error);
      });

      it('Should return the first element of the collection', ()=>{
        expect(_.first(items)).equal(1);
      });

      it('Should return the first n elements when a second argument is passed', ()=>{
        expect(_.first(items, 0)).equal(1);
        expect(_.first(items, 1)).to.deep.equal([1]);
        expect(_.first(items, 2)).to.deep.equal([1, 9]);
      })
    });

    describe('last',  ()=>{
      const items = [1,9, 10, 'Philos'];

      it('Should throw an error if no collection is passed', ()=>{
        ()=>{
          _.last();
        }.should.throw(Error);
      });

      it('Should return the last element of the collection', ()=>{
          expect(_.last(items)).to.deep.equal('Philos');
      });

      it('Should return the last n elements when a second argument is passed', ()=>{
        expect(_.last(items, 0)).equal('Philos');
        expect(_.last(items, 1)).to.deep.equal(['Philos']);
        expect(_.last(items, 2)).to.deep.equal([10, 'Philos']);
      })
    });

    describe('forEach', ()=>{
      const items = [1,9, 10, 'Philos'];

      it('Should return an array', ()=>{
        expect(_.forEach(items, _.identity)).is.an('array');
      });

      it('Should call the callback on every single item by passing the current item, the index and the initial collection', ()=>{
        const spy = sinon.spy(_, 'identity');
        _.forEach(items, spy);
        expect(spy.callCount).equal(4);
        expect(spy.calledWith(1, 0, items)).equal(true);
        expect(spy.calledWith(9, 1, items)).equal(true);
        expect(spy.calledWith(10, 2, items)).equal(true);
        expect(spy.calledWith('Philos', 3, items)).equal(true);
      });
    });

    describe('map', ()=>{
      it('should apply a function to every value in an array', ()=>{
        const squaredValues = _.map([4, 2, 3, 9], (item) => item*item);
        expect(squaredValues).to.deep.equal([16, 4, 9, 81]);
      });
    });

    describe('find: find does not mutate the array on which it is called.', ()=>{

      xit('Should throw an error if no predicate is passed', ()=>{
        ()=>{
          _.find();
        }.should.throw(Error);
      });

      it('should return undefined if none of the elements match the predicate', ()=>{
        const isEven = (num) => { num % 2 === 0; };
        const evens = _.find([1, 3, 7, 5], isEven);
        expect(evens).equal('undefined');
      });

      it('should return the first element that matchs the predicate', ()=>{
        const isOdd = (num) => { num % 2 !== 0; };
        const odds = _.find([10, 2, 3, 4, 5, 6], isOdd);
        expect(odds).equal(3);
      });
    });

    describe('findIndex', ()=>{});

    describe('fill', ()=>{});

    describe('keys', ()=>{});

    describe('values', ()=>{});

    describe('entries', ()=>{});
});
