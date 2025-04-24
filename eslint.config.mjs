import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import stylisticTs from "@stylistic/eslint-plugin-ts";
import stylisticJs from "@stylistic/eslint-plugin-js";
import { globalIgnores } from "eslint/config";

export default tseslint.config(
  globalIgnores(["index.js", "dist/**/*"]),
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    plugins: {
      "@stylistic/js": stylisticJs,
      "@stylistic/ts": stylisticTs,
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-constant-condition": ["off"],

      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-extraneous-class": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-unnecessary-condition": "warn",
      "@typescript-eslint/no-unnecessary-type-arguments": "warn",
      "@typescript-eslint/no-confusing-void-expression": [
        "error",
        {
          ignoreArrowShorthand: true,
          ignoreVoidOperator: true,
        },
      ],

      "@stylistic/js/arrow-parens": ["error", "as-needed"],
      "@stylistic/js/eol-last": ["error", "always"],
      "@stylistic/js/operator-linebreak": ["error", "after"],

      "@stylistic/ts/indent": [
        "error",
        2,
        {
          ignoredNodes: [
            "FunctionExpression > .params[decorators.length > 0]",
            "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
            "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key",
          ],

          SwitchCase: 1,
        },
      ],

      "@stylistic/ts/quote-props": ["error", "as-needed"],
      "@stylistic/ts/quotes": ["error", "double"],
      "@stylistic/ts/semi": ["error", "always"],
      "@stylistic/ts/brace-style": ["error", "1tbs"],

      "@stylistic/ts/lines-between-class-members": [
        "error",
        {
          enforce: [
            {
              blankLine: "never",
              prev: "field",
              next: "field",
            },
            {
              blankLine: "always",
              prev: "field",
              next: "method",
            },
            {
              blankLine: "always",
              prev: "method",
              next: "method",
            },
          ],
        },
        {
          exceptAfterOverload: false,
        },
      ],

      "@stylistic/ts/member-delimiter-style": [
        "error",
        {
          multiline: {
            delimiter: "semi",
            requireLast: true,
          },

          singleline: {
            delimiter: "semi",
            requireLast: false,
          },

          multilineDetection: "brackets",
        },
      ],
    },
  }
);
