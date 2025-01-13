const next = require('eslint-config-next');

module.exports = {
  root: true,
  files: ['**/*.{js,jsx,ts,tsx}'], // Files to lint
  rules: {
    '@next/next/no-img-element': 'warn', // Correct rule name
    'react/no-unescaped-entities': 'warn', // Disable unescaped entities error
  },
  plugins: {
    react: require('eslint-plugin-react'),
    '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
  },
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  ignores: [
    '**/.git',
    '**/.hg',
    '**/.pnp.*',
    '**/.svn',
    '**/.yarn/**',
    '**/build',
    '**/dist/**',
    '**/node_modules',
    '**/temp',
    '**/.tmp',
    '**/.cache',
    'playwright.config.ts',
    'jest.config.js'
  ],
  ...next(),
}
