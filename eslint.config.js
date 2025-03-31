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
    },
    rules: {
      "space-in-parens": "off",
      'prettier/prettier': 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      'import/no-duplicates': 'error',
      'no-plusplus': 'off',
      'no-param-reassign': 'off',
      
    },
  },
];
