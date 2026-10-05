import js from '@eslint/js';
import tsdoc from 'eslint-plugin-tsdoc';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['**/*.js', '**/*.cjs', '**/*.mjs', 'build/', 'lib/', '.svelte-kit/', 'package/', 'coverage/', 'docs/'],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    plugins: {
      tsdoc,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'tsdoc/syntax': 'warn',
      'max-classes-per-file': 'off',
      // typescript-eslint v8 made these errors; keep them as warnings like before
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
);
