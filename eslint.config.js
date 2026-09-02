import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import vue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
    {
        ignores: ['dist', 'node_modules'],
    },
    js.configs.recommended,
    ...vue.configs['flat/recommended'],
    {
        files: ['**/*.{js,vue}'],
        languageOptions: {
            globals: globals.browser,
        },
    },
    {
        files: ['**/*.{spec,test}.js'],
        languageOptions: {
            globals: globals.vitest,
        },
    },
    {
        files: ['src/components/ui/**/*.vue'],
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/require-default-prop': 'off',
        },
    },
    prettier,
];
