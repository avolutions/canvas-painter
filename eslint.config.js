import typescriptParser from "@typescript-eslint/parser";
import js from "@eslint/js";
import ts from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    files: ["src/**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: typescriptParser,
    },
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      "keyword-spacing": ["error", { "before": true, "after": true }],
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          accessibility: "explicit",
          overrides: {
            constructors: "no-public"
          },
        }
      ],
      "import/extensions": ["error", "always"],
    }
  },
  {
    ignores: [
      "coverage/",
      "dist/",
      "website/",
      "node_modules/",
      "tests/",
    ]
  },
];