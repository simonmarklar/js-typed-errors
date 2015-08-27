/* eslint-env node */
'use strict';

var makeErrorType = require('../make-error-type.js');

/**
 * @param {string} [msg='NotFound'] A Message to display
 *
 * @property {string} [message='NotFound'] - The error message
 * @property {string} [name='NotFound'] - The name of the error
 */
function NotFoundError(msg){
  this.msg = msg || 'The specified url was not found';
}


module.exports = makeErrorType( 'NotFound', NotFoundError );
