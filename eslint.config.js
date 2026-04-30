module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'script',
      globals: {
        document: 'readonly',
        window: 'readonly',
        module: 'readonly',
        require: 'readonly',
        console: 'readonly'
      }
    },
    rules: {}
  }
];
