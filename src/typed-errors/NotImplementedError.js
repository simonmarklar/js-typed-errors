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
