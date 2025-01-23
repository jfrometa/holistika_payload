// eslint.config.cjs

const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

// For migrating legacy configs to flat:
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  // 1) Ignore patterns
  {
    ignores: [
      '**/node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      'public/**',
      '**/.git/**',
      '**/coverage/**',
      '*.config.js',
      '*.config.mjs',
      '*.config.cjs',
    ],
  },

  // 2) Base JS config from @eslint/js
  js.configs.recommended,

  // 3) Main legacy config (converted via compat)
  ...compat.config({
    root: true,
    env: {
      browser: true,
      es2024: true,
      node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', 'js', 'jsx'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
      react: {
        version: 'detect',
      },
    },
    plugins: [
      // Load Next plugin manually
      '@next/next',

      // Other plugins
      '@typescript-eslint',
      'react',
      'react-hooks',
      'import',
    ],
    rules: {
      // --------------------------------
      //   Example React & TS rules
      // --------------------------------
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      '@typescript-eslint/ban-ts-comment': [
        'warn',
        {
          'ts-ignore': true,
          'ts-expect-error': 'allow-with-description',
          'minimumDescriptionLength': 3,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // --------------------------------
      //   Example Import rules
      // --------------------------------
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      // --------------------------------
      //   General rules
      // --------------------------------
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'warn',
      'no-unused-expressions': 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    },
  }),

  // 4) Specific TypeScript & Next overrides (legacy -> flat)
  ...compat.config({
    overrides: [
      {
        files: ['**/*.{js,jsx,ts,tsx}'],
        extends: [
          'plugin:@typescript-eslint/recommended',
          'plugin:react/recommended',
          'plugin:react-hooks/recommended',
          // Use Next's recommended config
          'plugin:@next/next/core-web-vitals',
        ],
      },
    ],
  }),
];