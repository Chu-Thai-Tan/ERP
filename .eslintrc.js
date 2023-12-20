module.exports = {
  extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended'],
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    'eslint-plugin-react',
    'eslint-plugin-simple-import-sort',
    'eslint-plugin-import',
    '@typescript-eslint/eslint-plugin',
    'eslint-plugin-filename-export',
  ],
  rules: {
    // fixable rules
    curly: [1, 'all'],
    semi: [1, 'never'],
    quotes: [1, 'single', { avoidEscape: true }],
    'jsx-quotes': [1, 'prefer-single'],
    'one-var': [1, 'never'],
    'sort-imports': 0,
    'import/order': 1,
    'simple-import-sort/imports': [
      1,
      {
        groups: [
          ['^\\u0000'],
          ['^@?\\w'],
          ['\\.(s?css|svg|png|jpe?g|gif)$'],
          ['^[^.]'],
          ['^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 1,
    'import/first': 1,
    'import/newline-after-import': 1,
    'import/no-duplicates': 1,
    'import/no-extraneous-dependencies': 1,
    'object-shorthand': [1, 'always'],
    'prefer-const': 1,
    'spaced-comment': [1, 'always'],
    'react/jsx-no-useless-fragment': 1,
    'react/react-in-jsx-scope': 0,
    'react-native/no-inline-styles': 0,
    // compatible with prettier
    '@typescript-eslint/member-delimiter-style': [
      1,
      {
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
      },
    ],
    // compatible with typescript
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [1, { args: 'none' }],
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 1,
    '@typescript-eslint/no-explicit-any': 0,
    // must use named export
    'import/no-default-export': 1,
    // restrict css modules unused/undef class names
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
