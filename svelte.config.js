/**
 * This file is created so that VSCode can
 * correctly highlight the CSS syntax and
 * avoid producing unwanted syntax errors.
 */
import sveltePreprocess from 'svelte-preprocess';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

export default {
    preprocess: sveltePreprocess({
        defaults:{
            style: 'postcss'
        },
        sourceMap: dev,
        postcss: true
    })
};