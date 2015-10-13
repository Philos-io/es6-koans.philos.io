import chai from 'chai';
import sinon from 'sinon';
let expect = chai.expect;
chai.should();

// You can implement your solution in another file or inline here

describe('Class in ES6', ()=>{
 xdescribe('Foo class', ()=>{

   it('should be a function', ()=>{
     expect(Human).to.be.a('function');
   });

   it('should have a name property called Human', ()=>{
     expect(Human).has.property('name').equal('Human');
   });

   it('Should have a property prototype of type object', ()=>{
     expect(Human).has.property('prototype').is.a('object');
     expect(typeof Human.prototype).equal('object');

     describe('Human.prototype', ()=>{
       it('Should contain a property Walk of type function', ()=>{
        expect(Human.prototype).has.property('Walk').is.a('function');
       });
     });
   });

   it('Should contain a static property called inject of type array', ()=>{
     expect(Human).has.property('inject').is.an('array');
   });

   it('Should throw an error if no fullName is passed at the instantiation', ()=>{
     () => {
        new Human()
      }.should.throw(Error);
   })
   // Getter and setter in ES6 class
   it('Should have an instance property fullName', ()=>{
     let obj = new Human({fullName: 'Tom Thomas'});
     expect(obj.fullName).to.be.defined;
     expect(obj.fullName).to.equal('Tom Thomas');
   });

   it('It should throw an error if fullName is set to anything else but a string', ()=>{
     () => {
        new Human({fullName: 12987})
      }.should.throw(Error);
   });
 });
});
