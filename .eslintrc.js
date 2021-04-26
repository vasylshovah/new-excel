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
        'quotes': 'off',
        'eol-last': 'off',
        'space-before-blocks': 'off',
        'arrow-parens': 'off',
        'operator-linebreak': 'off',
        'max-len': 'off',
        'space-before-function-paren': 'off'
    }
}
