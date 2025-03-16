module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: ['import', 'prettier', 'tailwindcss'],
  rules: {
    'prettier/prettier': ['error'],
    'import/order': ['error', { groups: ['builtin', 'external', 'internal'] }],
  },
};
