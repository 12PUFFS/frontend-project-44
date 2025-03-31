import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  {
    plugins: {
      prettier,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        console: 'readonly',
      },
    },
    rules: {
      'prettier/prettier': 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      'no-plusplus': 'off',
      'no-param-reassign': 'off',
      'import/no-duplicates': 'error',
      'space-in-parens': ['error', 'never'],
    },
  },
];
