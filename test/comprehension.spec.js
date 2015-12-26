import chai from 'chai';
let expect = chai.expect;

xdescribe('Comprehension...', ()=>{

  describe('Array...', ()=>{
    let fruits = ['brussels sprout', 'apple', 'beetroot', 'broccoli', 'carrot', 'cherry'];

    it('With ES5', ()=>{
      // TODO: Get the first fruit
      let first = fruits[0];
      expect(first).to.equal('brussels sprout');
      // TODO: Get the last fruit
      let last = fruits[fruits.length-1];
      expect(last).to.equal('cherry');
    });

    it('With ES6', ()=>{
      // TODO: Get the first fruit
      expect(first).to.equal('brussels sprout');
      // TODO: Get the last fruit
      expect(last).to.equal('cherry');
    });
  });


  describe('Generators...', ()=>{

    // TODO: Retrieve the user's id, name and twitter handle from getUserInfo
    it('With ES5', ()=>{
      let userInfo = getUserInfo();
      let id = userInfo.id;
      let fullName = userInfo.name;
      let twitter = userInfo.handles.twitter;

      expect(id).to.be.defined;
      expect(fullName).to.equal('Davy Engone');
      expect(twitter).to.equal('davyengone');
    });

    it('With ES6 object Destructuring to do the same operation', ()=>{
      expect(id).to.be.defined;
      expect(fullName).to.equal('Davy Engone');
      expect(twitter).to.equal('davyengone');
    })
  });


});
