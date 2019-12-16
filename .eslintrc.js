module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
        'codeceptjs/codeceptjs': true
    },
    'extends': ['plugin:codeceptjs/recommended', 'eslint:recommended'],
    'parserOptions': {
        'sourceType': 'module',
        'ecmaVersion': 2017
    },
    'rules': {
        'indent': [
            'error',
            'tab'
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-control-regex': 0,
        //'codeceptjs/no-actor-in-scenario': 2,
        //'no-pause-in-scenario': 2
    }
};