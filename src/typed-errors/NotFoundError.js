/* eslint-env node */
'use strict';

var makeErrorType = require('../make-error-type.js');

function NotFoundError(msg){
  this.msg = msg || 'The specified url was not found';
}


module.exports = makeErrorType( 'NotFound', NotFoundError );
