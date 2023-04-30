module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ['standard-with-typescript', 'eslint-config-prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    rules: {},
};
