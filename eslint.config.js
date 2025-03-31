// eslint.config.js
import js from '@eslint/js';  // Правильный импорт для ESLint v9+
import globals from 'globals';

export default [
  js.configs.recommended,  // Базовые правила ESLint
  {
    rules: {
      // Ваши кастомные правила
      "semi": ["error", "always"],
      "quotes": ["error", "single"]
    }
  }
];