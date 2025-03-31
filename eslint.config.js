import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        console: 'readonly', // Явно разрешаем console
      },
      env: {
        node: true, // Включаем глобальные переменные Node.js
      }
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
];
