/**
 * This file is created so that VSCode can
 * correctly highlight the CSS syntax and
 * avoid producing unwante syntax errors.
 */
const sveltePreprocess = require('svelte-preprocess');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
    preprocess: sveltePreprocess({
        defaults:{
            style: 'postcss'
        },
        sourceMap: dev,
        postcss: true
    }),
};