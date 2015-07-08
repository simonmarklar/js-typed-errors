// Karma configuration
// Generated on Wed Jul 08 2015 10:05:39 GMT+1000 (AUS Eastern Standard Time)
/*eslint-env node, browser  */
module.exports = function(config) {
  'use strict';

config.set({

  // base path that will be used to resolve all patterns (eg. files, exclude)
  basePath: './',


  // frameworks to use
  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  frameworks: ['browserify', 'detectBrowsers', 'mocha', 'chai'],


  // list of files / patterns to load in the browser
  files: [
    'tests/**/*.js'
  ],


  // list of files to exclude
  exclude: [
  ],


  // preprocess matching files before serving them to the browser
  // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
  preprocessors: {
    'tests/**/*.js': [ 'browserify' ]
  },

  browserify: {
    debug: true,
    transform: [ 'brfs' ],
    extensions: ['.js']
  },

  client: {
    mocha: {
      reporter: 'html', // change Karma's debug.html to the mocha web reporter
      ui: 'bdd'
    }
  },

  // test results reporter to use
  // possible values: 'dots', 'progress'
  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  reporters: ['dots'],


  // web server port
  port: 1337,


  // enable / disable colors in the output (reporters and logs)
  colors: true,


  // level of logging
  // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
  logLevel: config.LOG_INFO,


  // enable / disable watching file and executing tests whenever any file changes
  autoWatch: false,


  // start these browsers
  // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
  browsers: [],


  // Continuous Integration mode
  // if true, Karma captures browsers, runs the tests and exits
  singleRun: true
});
};
