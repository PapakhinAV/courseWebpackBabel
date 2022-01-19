module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        indent: 'off',
    },
    overrides: [
        {
            files: [
                '**/*.spec.js',
                '**/*.spec.jsx',
            ],
            env: {
                jest: true,
            },
        },
    ],
};
