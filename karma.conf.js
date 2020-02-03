// Karma configuration

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['parallel', 'mocha', 'chai'],

    // plugins
    plugins: ['karma-mocha', 'karma-chai', 'karma-browserstack-launcher', 'karma-parallel', 'karma-htmlfile-reporter'],

    client: {
      mocha: {
        // change Karma's debug.html to the mocha web reporter
        reporter: 'html',
        expose: ['body']
      }
    },

    parallelOptions: {
      executors: 4
    },
    // list of files / patterns to load in the browser
    files: [
      'src/*.js',
      'tests/*.js'
    ],

    browserConsoleLogOptions: { level: "log", format: "%b %T: %m", terminal: true },

    path: 'output/browser_console.log',

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'html', 'dots', 'BrowserStack'],
    // reporters: ['progress', 'BrowserStack'],
    htmlReporter: {
      outputFile: 'output/karma_test_summary.html',

      // Optional
      pageTitle: 'Karma JS Test Summary',
      subPageTitle: 'Karma BrowserStack Mocha Chai Parallel run example',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true,
      showOnlyFailed: false
    },

    // bs-local.com works for iOS, Android and Desktop browsers on BrowserStack.
    // Equivalent of localhost on desktop test runs.
    // Change this to localhost if not running on BrowserStack
    hostname: 'localhost',
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    //logLevel: config.LOG_DISABLE,
    logLevel: config.LOG_DEBUG,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    browserStack: {
      username: process.env.BROWSERSTACK_USERNAME,
      accessKey: process.env.BROWSERSTACK_KEY,
      retryLimit: 0,
      // startTunnel: false,
      // tunnelIdentifier: 'mykarmatest',
      // forcelocal: true,
      build: 'Karma JS test suites',
      name: 'Karma JS test suite',
      project: 'BrowserStack Sample with Karma Mocha Chai',
      apiClientEndpoint: 'https://api.browserstack.com'
    },


    // define BrowserStack browsers
    customLaunchers: {
      bs_firefox_mac: {
        base: 'BrowserStack',
        browser: 'firefox',
        browser_version: '70.0',
        os: 'OS X',
        os_version: 'High Sierra',
        forcelocal: true
        //video: false,

      },
      bs_pixel: {
        base: 'BrowserStack',
        device: 'Google Pixel',
        real_mobile: true,
        os: 'Android',
        os_version: '8.0'
        //video: false,
      },
      bs_iphone8: {
        base: 'BrowserStack',
        device: 'iPhone 8',
        real_mobile: true,
        os: 'iOS',
        //video: false,
        os_version: '11.0'
      },
      bs_chrome_win10: {
        base: 'BrowserStack',
        browser: 'chrome',
        browser_version: '79',
        os: 'Windows',
        os_version: '10'
        //video: false,
      },
      bs_ie_win81: {
        base: 'BrowserStack',
        browser: 'IE',
        browser_version: '11',
        os: 'Windows',
        os_version: '8.1'
        //video: false,
      }
    },

    captureTimeout: 210000,
    browserDisconnectTolerance: 0,
    browserDisconnectTimeout: 210000,
    browserSocketTimeout: 120000,
    browserNoActivityTimeout: 210000,
    concurrency: 5, // concurrency value will start x browsers / devices at a time on BrowserStack where x is the concurrency value
    reportSlowerThan: 60000,
    browsers: ['bs_firefox_mac', 'bs_pixel', 'bs_iphone8', 'bs_chrome_win10', 'bs_ie_win81'],
    //browsers: ['bs_iphone8'],
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
}
