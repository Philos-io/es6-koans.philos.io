import chai from 'chai';
import sinon from 'sinon';
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

      it('Should return the first n elements when a second argument is passed', ()=>{
        expect(_.first(items, 0)).equal(1);
        expect(_.first(items, 1)).to.deep.equal([1]);
        expect(_.first(items, 2)).to.deep.equal([1, 9]);
      })
    });

    xdescribe('last',  ()=>{
      let items = [1,9, 10, 'Philos'];

      it('Should throw an error if no collection is passed', ()=>{
        ()=>{
          _.last();
        }.should.throw(Error);
      });

      it('Should return the last element of the collection', ()=>{
          expect(_.last(items)).to.deep.equal('Philos');
      });

      it('Should return the last n elements when a second argument is passed', ()=>{
        expect(_.first(items, 0)).equal('Philos');
        expect(_.first(items, 1)).to.deep.equal(['Philos']);
        expect(_.first(items, 2)).to.deep.equal([10, 'Philos']);
      })
    });

    describe('forEach', ()=>{
      let items = [1,9, 10, 'Philos'];

      it('Should return an array', ()=>{
        expect(_.forEach(items, _.identity)).is.an('array');
      });

      it('Should call the callback on every single item by passing the current item, the index and the initial collection', ()=>{
        let spy = sinon.spy(_, 'identity');
        _.forEach(items, spy);
        expect(spy.callCount).equal(4);
        expect(spy.calledWith(1, 0, items)).equal(true);
        expect(spy.calledWith(9, 1, items)).equal(true);
        expect(spy.calledWith(10, 2, items)).equal(true);
        expect(spy.calledWith('Philos', 3, items)).equal(true);
      });
    });

    describe('map', ()=>{})

    describe('find', ()=>{});

    describe('findIndex', ()=>{});

    describe('fill', ()=>{});

    describe('keys', ()=>{});

    describe('values', ()=>{});

    describe('entries', ()=>{});
});
