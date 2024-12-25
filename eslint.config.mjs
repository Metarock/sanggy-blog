// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.Config[]} */
const configs = [
  ...compat.config({
    root: true,
    extends: [
      'plugin:prettier/recommended',
      'plugin:tailwindcss/recommended',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:@next/next/recommended',
      'next/core-web-vitals',
      'next/typescript',
    ],
    plugins: ['import', '@typescript-eslint', 'prettier', 'tailwindcss'],
    rules: {
      'import/no-default-export': 'error',
    },
    overrides: [
      // App router
      {
        files: [
          'src/pages/**/*',
          'src/app/**/{page,layout,not-found,robots,sitemap,route}.{js,ts,jsx,tsx,mdx}',
          'src/middleware.ts',
          'src/loaders/**/*',
          'eslint.config.mjs',
        ],
        rules: {
          'import/no-default-export': 'off',
        },
      },
    ],
  }),
];

export default configs;
