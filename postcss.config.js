const postcssPresetEnv = require('postcss-preset-env');
const postcssNormalize = require('postcss-normalize');
const postcssImport = require('postcss-easy-import');
const postcssAdvanceVars = require('postcss-advanced-variables');
const postcssPurgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const postcssAutoMath = require('postcss-automath');

//* Using `postcss-nested` as it provides
//* more sass like nesting features as compared
//* to the cssnext spec.
const postcssNested = require('postcss-nested');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';


module.exports = {
    plugins: [
        postcssImport({
            extensions: ['.css','.pcss'],
            prefix: '_',
        }),

        postcssAdvanceVars({
            disable: '@import'
        }),

        postcssAutoMath(),

        // TODO Check if normalize.css is really needed or not.
        //* `browsers` option will be automatically read
        //* from .browserslistrc file
        postcssNormalize(),

        postcssPresetEnv({
            //* `browsers` option will be automatically read
            //* from .browserslistrc file

            stage: 2,

            // Removes the newer(unwanted) css code
            // once it has it's polyfill.
            preserve: false,

            autoprefixer: !dev,
            features: { 
                // using nesting-rules which is a stage 1 spec
                // "nesting-rules": true,
                
                'custom-media-queries': true,
                'media-query-ranges': true
            },
        }),

        postcssNested(),

        // Ref: https://github.com/babichjacob/sapper-postcss-template/blob/main/postcss.config.js#L25
        !dev && postcssPurgecss({
            content: ['./src/**/*.svelte', './src/**/*.html'],
            // eslint-disable-next-line no-unused-vars
            defaultExtractor: (content) => [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
        }),

        !dev && cssnano({
            preset:[
                'default',
                {discardComments: {removeAll: true}}
            ]
        }),
    ].filter(Boolean)
};