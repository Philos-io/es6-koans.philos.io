import chai from 'chai';
let expect = chai.expect;


xdescribe('var, let, const', ()=>{

    describe('var...', ()=>{

      function iterator(bool){
        if (bool) {
            var name = 'Philos';
        }
        return name;
      }

      it('what do you expect???', ()=>{
        expect(iterator()).to.equal('')
      });
    });

    describe('let...', ()=>{

      function iterator(bool){
        let name = 'davy';
        if (bool) {
            let name = 'Philos';
        }
        return name;
      }

      it('what do you expect???', ()=>{
        expect(iterator(true)).to.equal('???')
      });
    });

    describe('const...', ()=>{

      function iterator(bool){
        if (bool) {
            const name = 'Philos';
        }

        return name;
      }

      it('what do you expect???', ()=>{
        expect(iterator()).to.equal('???')
      });
    });
});
