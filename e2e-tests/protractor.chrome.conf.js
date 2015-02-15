exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],
  
  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/app/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
