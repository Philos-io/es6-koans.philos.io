// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols

import chai from 'chai';
let expect = chai.expect;


describe('iterator function', ()=>{

  xit('Should return an object that provides a next method/function', ()=>{
    expect(iterator([]))
      .to.be.an('object')
      .that.has.property('next')
      .to.be.a('function');


    xdescribe('next function', ()=>{
      it('Should return an object with two properties: done of type boolean and value', () => {
        let returnObject = iterator([]).next();
        expect(returnObject).to.have.a.property('value').to.equal(undefined);
        expect(returnObject).to.have.a.property('done').to.be.a('boolean').to.equal(true);
      });

      it('Should return the next item in the collection', ()=>{
        let items = iterator(['Maartens', 'Johan', 'Eric', 'Tom']);

        expect(items.next()).to.deep.equal({value: 'Maartens', done: false});
        expect(items.next()).to.deep.equal({value: 'Johan', done: false});
        expect(items.next()).to.deep.equal({value: 'Eric', done: false});
        expect(items.next()).to.deep.equal({value: 'Tom', done: false});
        expect(items.next()).to.deep.equal({value: undefined, done: true});
        expect(items.next()).to.deep.equal({value: undefined, done: true});
      });
    });
  });
});
