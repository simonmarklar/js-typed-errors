/* eslint-env node */
'use strict';

var makeErrorType = require('../make-error-type.js');

function ActionAbortedError(msg){
  this.message = msg || 'The action was aborted';
}


module.exports = makeErrorType( 'ActionAborted', ActionAbortedError );
