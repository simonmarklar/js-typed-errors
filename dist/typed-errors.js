(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.TypedErrors = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*eslint-env node, browser  */

'use strict';

module.exports = {
  makeErrorType: require('./make-error-type.js'),

  NotImplementedError: require('./typed-errors/NotImplementedError.js'),
  NotFoundError: require('./typed-errors/NotFoundError.js'),

  ActionAbortedError: require('./typed-errors/ActionAbortedError.js')
};

},{"./make-error-type.js":2,"./typed-errors/ActionAbortedError.js":3,"./typed-errors/NotFoundError.js":4,"./typed-errors/NotImplementedError.js":5}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
/* eslint-env node */
'use strict';

var makeErrorType = require('../make-error-type.js');

function ActionAbortedError(msg){
  this.msg = msg || 'The action was aborted';
}


module.exports = makeErrorType( 'ActionAborted', ActionAbortedError );

},{"../make-error-type.js":2}],4:[function(require,module,exports){
/* eslint-env node */
'use strict';

var makeErrorType = require('../make-error-type.js');

function NotFoundError(msg){
  this.msg = msg || 'The specified url was not found';
}


module.exports = makeErrorType( 'NotFound', NotFoundError );

},{"../make-error-type.js":2}],5:[function(require,module,exports){
/* eslint-env node */

'use strict';

var makeErrorType = require('../make-error-type.js');

//see http://stackoverflow.com/questions/783818/how-do-i-create-a-custom-error-in-javascript

/**
 * @param {string} A Message to display
 *
 * @property {string} [message='Not Implemented'] - The error message
 * @property {string} [name='NotImplemented'] - The name of the error
 */
function NotImplementedError(msg){
  this.message = msg || 'Not Implemented';
}

module.exports = makeErrorType( 'NotImplemented', NotImplementedError );

},{"../make-error-type.js":2}]},{},[1])(1)
});