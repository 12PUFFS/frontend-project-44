import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';
import eslintPluginImport from 'eslint-plugin-import';

export default [
  js.configs.recommended,
  {
    plugins: {
      prettier,
      import: eslintPluginImport,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        console: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'space-in-parens': 'off',
      'prettier/prettier': 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      'import/no-duplicates': 'error',
      'no-plusplus': 'off',
      'no-param-reassign': 'off',
      'no-multi-spaces': ['error', { ignoreEOLComments: true }],
      'object-curly-spacing': ['error', 'always'],
      'no-trailing-spaces': 'error',
    },
  },
];
