module.exports = {
  extends: 'next',
  root: true,
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  // ignores: [
  //   '**/.git',
  //   '**/.hg',
  //   '**/.pnp.*',
  //   '**/.svn',
  //   '**/.yarn/**',
  //   '**/build',
  //   '**/dist/**',
  //   '**/node_modules',
  //   '**/temp',
  //   '**/.tmp',
  //   '**/.cache',
  //   'playwright.config.ts',
  //   'jest.config.js'
  // ]
}
