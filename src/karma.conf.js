module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-electron'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client:{
      clearContext: false
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['LiefRe'],
    singleRun: true,
    customLaunchers: {
      LiefRe: {
        base: 'Electron',
        browserWindowOptions: {
          webPreferences: {
            nodeIntegration: true,
            allowRunningInsecureContent: true
          }
        }
      }
    },
    client: {
      useIframe: false
    }
  });
};
