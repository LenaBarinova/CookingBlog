module.exports = function(config) {
  config.set({

    basePath: '../',

    

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-social-links/angular-social-links.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/sinon/sinon-1.10.2.js',
      'bower_components/sinon/lib/sinon/spy.js',
      'js/**/*.js',
      'test/unit/*.js'
    ],

    exclude: [
      'js/theme/*.js',
    ],
    autowatch: true,
    
    frameworks: ['jasmine'],
    
    browsers: ['Chrome'],
    
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ],

    junitReporter: {
      outputFile: 'test/unit.xml',
      suite: 'unit'
    }
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    //singleRun: false
  });
};
