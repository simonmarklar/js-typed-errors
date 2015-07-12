'use strict';

var makeErrorType = require('../make-error-type.js');

function ActionAbortedError(msg){
  this.msg = msg || "The action was aborted";
}


return makeErrorType( 'ActionAborted', ActionAbortedError );