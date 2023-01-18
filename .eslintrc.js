module.exports = {
  plugins: ["import", "unused-imports", "tailwindcss"],
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  rules: {
    "no-restricted-imports": ["error"],
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "{react,react-dom/**,react-router-dom}",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@src/**",
            group: "parent",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "always",
      },
    ],
    "unused-imports/no-unused-imports": "error",
  },
};