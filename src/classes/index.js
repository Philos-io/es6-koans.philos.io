
function Human({fullName}){
  if(!fullName) throw new Error('fullName is mandatory');

  Object.defineProperty(this, 'fullName', {
   get: function() {
     return fullName;
   },
   set: function(value) {
     if (typeof value !== 'string') {
       throw new Error('fullName should be a string');
     }
     fullName = value;
   }
 });
 
 this.fullName = fullName;
}
Human.inject = [];
Human.prototype.Walk = function(){}

export default Human;
