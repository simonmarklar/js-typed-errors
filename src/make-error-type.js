/*eslint-env node, browser  */

function makeErrorType(name, ErrorConstructor){
  'use strict';

  ErrorConstructor.prototype = Object.create(Error.prototype, {
   'name': {
      configurable: false,
      writable: false,
      value: name
    }
  });

  ErrorConstructor.constructor = ErrorConstructor;

  return ErrorConstructor;
}

module.exports = makeErrorType;
