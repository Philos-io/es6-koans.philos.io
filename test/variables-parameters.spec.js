import chai from 'chai';
let expect = chai.expect;


describe('var, let, const', ()=>{

    xdescribe('var...', ()=>{

      function iterator(bool){

        if (bool) {
            var name = 'Philos';
        }
        return name;
      }

      it('what do you expect???', ()=>{
        expect(iterator(false))
        .to.equal(undefined)
      });
    });

    xdescribe('let...', ()=>{

      function iterator(bool){
        if (bool) {
          let name = 'Philos';
        }
        return name;
      }

      it('what do you expect???', ()=>{
        expect(iterator(true)).to.equal('')
      });
    });

    xdescribe('const...', ()=>{

      function iterator(bool){
        if (bool) {
            const name = 'we';
        }

        return name;
      }

      it('what do you expect???', ()=>{
        expect(iterator(true)).to.equal('???')
      });
    });
});
