module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha'],
        files: [
            'src/*.test.js'
        ],
        exclude: [
        ],
        preprocessors: {
            'src/*.test.js': ['webpack'],
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,

        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        autoWatch: true,
        browsers: [],
        singleRun: false,
        concurrency: Infinity
    });
};
