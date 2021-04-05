module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        babelOptions: {
            configFile: './babel.config.json',
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    'extends': 'google',
    rules: {
        'semi': 'off',
        'linebreak-style': 'off',
        'indent': 'off',
        'comma-dangle': 'off',
        'require-jsdoc': 'off',
        'quotes': 'off'
    }
}
