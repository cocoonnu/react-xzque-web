module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },

    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],

    overrides: [],

    parser: '@typescript-eslint/parser',

    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },

    plugins: ['react', '@typescript-eslint'],

    settings: {
        react: {
            version: 'detect',
        },
    },

    rules: {
        indent: ['error', 4], // 缩进

        quotes: ['error', 'single'], // 使用单引号

        'no-unused-vars': 0,

        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'], // 禁止空格和tab的混合缩进

        // 'no-debugger': 2, //禁止有debugger

        'space-infix-ops': 2, // 要求操作符周围有空格

        'space-before-blocks': 2, // 要求语句块之前有空格

        'import/first': 0, // 消除绝对路径必须要在相对路径前引入的问题

        'semi': ['error', 'never'], // 不允许加分号

        // TS 报错忽略
        '@typescript-eslint/no-var-requires': 0 // 允许使用requires
    },
}
