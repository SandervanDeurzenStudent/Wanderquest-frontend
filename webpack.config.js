const path = require('path');

module.exports = {
    // Je bestaande configuratie-opties
    resolve: {
        fallback: {
            "zlib": require.resolve("browserify-zlib"),
            "querystring": require.resolve("querystring-es3"),
            // Voeg andere polyfills toe als dat nodig is
        }
    },
    // Zorg ervoor dat je entry en output configuratie klopt
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
