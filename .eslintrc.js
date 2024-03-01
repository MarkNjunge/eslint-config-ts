/* eslint-disable @typescript-eslint/no-unsafe-assignment */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint", "@stylistic"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:@stylistic/recommended-extends",
  ],
  rules: {
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
    // stylistic
    "@stylistic/eol-last": ["error", "always"],
    "@stylistic/indent": [
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
    "@stylistic/quote-props": ["error", "as-needed"],
    "@stylistic/quotes": ["error", "double"],
    "@stylistic/arrow-parens": ["error", "as-needed"],
    "@stylistic/semi": ["error", "always"],
    "@stylistic/brace-style": ["error", "1tbs"],
    "@stylistic/operator-linebreak": ["error", "after"],
    "@stylistic/lines-between-class-members": [
      "error",
      {
        enforce: [
          { blankLine: "never", prev: "field", next: "field" },
          { blankLine: "always", prev: "field", next: "method" },
          { blankLine: "always", prev: "method", next: "method" },
        ],
      },
      { exceptAfterOverload: false },
    ],
    "@stylistic/member-delimiter-style": [
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
};
