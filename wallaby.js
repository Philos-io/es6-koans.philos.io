var babel = require('babel');

module.exports = function (wallaby) {
  return {
    files: [
      'arrow-function/*.js'
    ],

    tests: [
      'test/*spec.js'
    ],

    env: {
      type: 'node'
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel: babel,
        // https://babeljs.io/docs/usage/experimental/
        stage: 0,
        optional: ['runtime']
      })
    }
  };
};
