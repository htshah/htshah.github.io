const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
// TODO Uncomment once the :where with :global issue is fixed
// const postcssNormalize = require('postcss-normalize');
const postcssAdvanceVars = require('postcss-advanced-variables');
const postcssPurgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const postcssCalc = require('postcss-calc');

//* Using `postcss-nested` as it provides
//* more sass-like nesting features as compared
//* to the cssnext spec.
const postcssNested = require('postcss-nested');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
    plugins: [
        postcssImport(),

        // TODO Implement a custom sass-like resolver that resolves node_modules imports as well

        /* postcssImport2({
            root: path.resolve(process.cwd(), './src/assets/pcss'),

            filter(path) {
                return /^(~|\.)/.test(path);
            },

            resolve(id, basedir, importOptions) {
                const isRootImport = id.startsWith('~');
                const isRelativeImport = id.startsWith('.');
                const isLocalFile = isRootImport || isRelativeImport;

                // if (!isLocalFile) {
                //     console.log(id, basedir, importOptions.root, '\n\n');

                //     // Skip normalize.css
                //     return new Promise((res) => {
                //         resolve(id, () => res(id));
                //     });
                // }

                const root =
                    isRootImport || !isLocalFile ? importOptions.root : basedir;
                const file = id.replace(/^(~|\.)\//, './');

                const resolveOpts = {
                    basedir: root,
                    moduleDirectory: ['node_modules'],
                    extensions: ['.pcss', '.css'],
                    preserveSymlinks: false,
                    path: [
                        // TODO find a way to avoid adding explicit
                        // TODO statement for node package css resolution
                        path.resolve(process.cwd(), 'node_modules/'),
                        path.resolve(
                            process.cwd(),
                            'node_modules/@csstools/normalize.css'
                        ),
                    ],
                };

                return new Promise((res, rej) => {
                    resolve(file, resolveOpts, (err, path) =>
                        err ? rej(path) : res(path)
                    );
                });
            },
        }), */

        // TODO Check if normalize.css is really needed or not.
        //* `browsers` option will be automatically read
        //* from package.json file
        // postcssNormalize({
        //     allowDuplicates: false,
        // }),

        postcssAdvanceVars({
            disable: '@import',
        }),

        postcssCalc(),

        postcssNested(),

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
                'media-query-ranges': true,
            },
        }),

        // Ref: https://github.com/babichjacob/sapper-postcss-template/blob/main/postcss.config.js#L25
        !dev &&
            postcssPurgecss({
                content: ['./src/**/*.svelte', './src/**/*.html'],
                // eslint-disable-next-line no-unused-vars
                defaultExtractor: (content) =>
                    [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
                        ([_match, group, ..._rest]) => group
                    ),
            }),

        !dev &&
            cssnano({
                preset: ['default', { discardComments: { removeAll: true } }],
            }),
    ].filter(Boolean),
};
