/*eslint-env node, mocha */
/*global assert*/
/*global expect*/
/*global navigator */

'use strict';

var makeError = require('../src/make-error-type.js');


describe('Custom Errors', function(){
  var isPhantom;

  before(function(){
    isPhantom = navigator.userAgent.indexOf('PhantomJS') > -1;
  });
  
  var CustomError = (function(){    
    function CustomError(msg){
      this.message = msg || 'This is a custom message';
    }

    return makeError('CustomError', CustomError);
  }());

  it('is an instance of error', function(){
    assert.isTrue(new CustomError() instanceof Error);
  });

  it('is an instance of CustomError', function(){
    assert.isTrue(new CustomError() instanceof CustomError);
  });

  it('has a default message', function(){
    assert.equal((new CustomError()).message, 'This is a custom message');
  });

  it('uses custom message', function(){
    assert.equal((new CustomError('abc')).message, 'abc');
  });

  it('has the correct name', function(){
    assert.equal(new CustomError().name, 'CustomError');
  });

  it('should throw a TypeError if name is attempted to be overridden ', function(){
    
    var changeName = function(){
      var e = new CustomError();
      e.name = 'problem';
    };
    
    if ( !isPhantom ){
      expect(changeName).to.throw(TypeError);
    }
  });
});

