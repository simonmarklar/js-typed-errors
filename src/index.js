/*eslint-env node, browser  */

'use strict';

module.exports = {
  makeErrorType: require('./make-error-type.js'),

  NotImplementedError: require('./typed-errors/NotImplementedError.js')
};
