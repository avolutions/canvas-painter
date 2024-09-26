import typescriptParser from "@typescript-eslint/parser";
import js from "@eslint/js";
import ts from 'typescript-eslint';

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
    rules: {

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