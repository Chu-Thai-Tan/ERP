module.exports = {
  root: true,
  extends: '@react-native',
  plugins: [
    'eslint-plugin-react',
    'eslint-plugin-simple-import-sort',
    'eslint-plugin-import',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false, // <== ADD THIS
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'comma-dangle': [1],
    quotes: [1, 'single', { avoidEscape: true }],
  },
}
