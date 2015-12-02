import chai from 'chai';
let expect = chai.expect;

describe('Destructuring', ()=>{

  xdescribe('Array...', ()=>{
    let fruits = ['brussels sprout', 'apple', 'beetroot', 'broccoli', 'carrot', 'cherry'];

    it('With ES5', ()=>{
      // TODO: Get the first fruit
      expect(first).to.equal('brussels sprout');
      // TODO: Get the last fruit
      expect(last).to.equal('cherry');
    });

    it('With ES6', ()=>{
      // TODO: Get the first fruit
      expect(first).to.equal('brussels sprout');
      // TODO: Get the last fruit
      expect(last).to.equal('cherry');
    });
  });


  xdescribe('Object...', ()=>{
    function getUserInfo(){
      return  {
        id: 8798,
        name: 'Davy Engone',
        company: 'Philos',
        country: 'Everywhere',
        handles:{
          twitter: 'davyengone',
          skype: 'davy_engone'
        }
      };
    }

    // TODO: Retrieve the user's id, name as fullName and twitter handle from getUserInfo
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
