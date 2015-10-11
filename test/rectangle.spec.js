// // Import chai.
// let chai = require('chai'),
//   path = require('path');
//
// // Tell chai that we'll be using the "should" style assertions.
// chai.should();
//
// // Import the Rectangle class.
// // import Rectangle from '../classes/rectangle';
//
// describe('Rectangle', () => {
//   describe('#width', () => {
//     let rectangle;
//
//     beforeEach(() => {
//       // Create a new Rectangle object before every test.
//       rectangle = new Rectangle(10, 20);
//     });
//
//     it('returns the width', () => {
//       // This will fail if "rectangle.width" does
//       // not equal 10.
//       rectangle.width.should.equal(10);
//     });
//
//     it('can be changed', () => {
//       // Assert that the width can be changed.
//       rectangle.width = 30;
//       rectangle.width.should.equal(30);
//     });
//
//     it('only accepts numerical values', () => {
//       // Assert that an error will be thrown if
//       // the width it set to a non-numerical value.
//       () => {
//         rectangle.width = 'foo';
//       }.should.throw(Error);
//     });
//   });
// });
