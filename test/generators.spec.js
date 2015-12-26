// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
// http://koajs.com/

import chai from 'chai';
let expect = chai.expect;


class Company {
  constructor(customers){
    this.customers = customers;
  }
}

xdescribe('Generators', ()=>{
  it('Company should be iterable by customers', ()=>{
    let company = new Company(['Davy', 'Thomas', 'Lars']);
    expect([...company]).to.deep.equal(['Davy', 'Thomas', 'Lars']);
  });
});
