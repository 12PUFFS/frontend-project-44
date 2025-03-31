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
        ...globals.browser,
        console: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    rules: {
      // Стилевые правила
      'space-in-parens': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'no-multi-spaces': ['error', { ignoreEOLComments: true }],
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],

      // Правила для чистоты кода
      'import/no-duplicates': 'error',

      // Отключенные правила
      'no-plusplus': 'off',
      'no-param-reassign': 'off',

      // Интеграция с Prettier
      'prettier/prettier': [
        'error',
        {
          printWidth: 100,
          singleQuote: true,
          semi: true,
          trailingComma: 'es5',
          bracketSpacing: true,
        },
      ],
    },
  },
];
