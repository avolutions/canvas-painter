import typescriptParser from "@typescript-eslint/parser";
import js from "@eslint/js";
import ts from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import tsdocPlugin from 'eslint-plugin-tsdoc';

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
      tsdoc: tsdocPlugin,
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
      "tsdoc/syntax": "warn",
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