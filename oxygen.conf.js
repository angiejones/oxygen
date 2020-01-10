const path = require('path');

module.exports = {
    /*
     ======
     Suites
     ======
     Define your test suites here. 
    */
    suites: [{
        name: 'Selenium',
        cases: [{path: './tests/selenium_po.js' }]        
    },{
        name: 'Visual',
        cases: [{ path: './tests/visual.js'}]        
    },{
        name: 'PDF',
        cases: [{ path: './tests/pdf.js' }]        
    }],

    /*
     ============
     Capabilities
     ============
     Define your capabilities here. 
     If "concurrency" value is greater than 1, tests with different capabilities will be executed in parallel.
    */
    concurrency: 1,
    capabilities: [{browserName: 'chrome'}],
    
    // ========
    // Services
    // ========
    // List services you want to enable during the test execution.
    // Available services: selenium-standalone | devtools
    //
    services: ['selenium-standalone', 'devtools'],   
    //
    // =======
    // Modules
    // =======
    // List modules you want to enable during the test execution.
    // Loading unnecessary modules might slow down your test execution, 
    // so only load modules that are used in the test.
    // See a list of available modules here: http://docs.oxygenhq.org/
    //
    modules: ['web', 'db', 'log', 'assert', 'eyes', 'pdf', 'http', 'email'],
    //
    // =========
    // Framework
    // =========
    // Define a testing framework for this project. 
    // Available frameworks: oxygen | cucumber
    //
    framework: 'oxygen',
    //
    // =========
    // Reporting
    // =========
    // Define test reporter format and corresponding options. 
    // Multiple reporter formats can be specified.
    // Available reporters: json | html | junit | excel | pdf | xml
    //
    reporting: {
        //outputDir: path.join(__dirname, 'reports'),
        reporters: ['json'],
    },
    //
    // ==========
    // Applitools
    // ==========
    // Define your Applitools service API key.
    //
    applitoolsOpts: {
        key: ''
    },
    //
    // =====
    // Hooks
    // =====
    // Oxygen provides several hooks that can be used to interfere with the test
    // execution process. 
    //
    hooks: {
        //
        // Hook that gets executed before the test starts.
        // At this point, Oxygen has been already initialized, so you
        // can access Oxygen via 'ox' global variable. 
        //
        beforeTest: function(runId, options, caps) {

        },
        beforeSuite: function(suiteDef) {

        },
        beforeCase: function(caseDef) {
            
        },
        afterCase: function(caseDef, caseResult) {
            
        },
        afterSuite: function(suiteDef, suiteResult) {
            
        },
        afterTest: function(runId, result) {

        }
    }
};
