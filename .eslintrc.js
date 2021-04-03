module.exports = {
  parser: 'babel-eslint',
  plugins: ['react-hooks', 'react', 'import', 'prettier'],
  extends: ['prettier', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  rules: {
    'import/newline-after-import': 'warn',
    'import/no-unresolved': 0,
    'import/named': 'warn',
    'import/order': ['warn'],
    'react/prop-types': 'off',
    'react/sort-prop-types': 'off',
    'react/jsx-no-bind': 'off',
    'no-unused-vars': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-anonymous-default-export': 0,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies,
    'react/react-in-jsx-scope': 'off',
  },
  globals: {
    React: 'writable',
  },
  settings: {
    react: {
      version: '17.0.2',
    },
  },
};
