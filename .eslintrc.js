module.exports = {
  plugins: ['import', 'unused-imports', 'tailwindcss'],
  extends: ['next', 'next/core-web-vitals', 'plugin:tailwindcss/recommended', 'prettier'],
  rules: {
    'no-restricted-imports': ['error'],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'object', 'type', 'index'],
        pathGroups: [
          {
            pattern: '{react,react-dom/**,react-router-dom}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{next/**}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/models/**,@/repositories/**,@/usecases/**,@/components/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/states/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/assets/**',
            group: 'index',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
      },
    ],
    'unused-imports/no-unused-imports': 'error',
  },
};
