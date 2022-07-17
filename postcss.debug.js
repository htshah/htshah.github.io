const { createDebugger } = require('postcss-debug');
const postcss = require('postcss');
const postcssPlugin = require('./postcss.config');
const fs = require('fs');

const debug = createDebugger();

fs.readFile('src/assets/pcss/global.pcss', (err, css) => {
    postcss(debug(postcssPlugin))
        .process(css, {
            from: 'src/assets/pcss/global.pcss',
            to: 'global.css',
        })
        .then(() => {
            debug.inspect();
        });
});
