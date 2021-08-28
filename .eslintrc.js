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
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "@marknjunge/eslint-config",
  ],
  rules: {
    // From eslint
    "brace-style": "off",
    "@typescript-eslint/brace-style": ["error", "1tbs"],
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": ["error", "always-multiline", { functions: "never" }],
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": ["error"],
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": ["error"],
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": ["error", "never"],
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": [
      "error", {
        before: false,
        overrides: {
          from: { before: true },
          as: { before: true },
          else: { before: true },
          catch: { before: true },
        },
      },
    ],
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": [
      "error", "always", {
        exceptAfterOverload: true,
      },
    ],
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": ["error"],
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": ["error"],
    "no-duplicate-imports": "off",
    "@typescript-eslint/no-duplicate-imports": ["error"],
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": ["warn"],
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": ["error"],
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": ["error"],
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": ["error"],
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": ["error"],
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": ["off"],
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": ["error"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": ["error"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["off"],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    "quotes": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "semi": "off",
    "@typescript-eslint/semi": ["error", "always"],
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": [
      "error", {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": ["error", { int32Hint: false }],
    "new-cap": "off",

    // From eslint & requires type information
    // https://github.com/typescript-eslint/typescript-eslint/blob/893130f533173c8f34a15088f7994362d0ffffec/docs/getting-started/linting/TYPED_LINTING.md
    "@typescript-eslint/await-thenable": "error",
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": ["error"],
    "no-implied-eval": "off",
    "@typescript-eslint/no-implied-eval": ["error"],
    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": ["error"],
    "require-await": "off",
    "@typescript-eslint/require-await": "error",
    "no-return-await": "off",
    "@typescript-eslint/return-await": "error",

    // TS rules
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/ban-ts-comment": ["error", { "ts-expect-error": "allow-with-description" }],
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/member-delimiter-style": ["error"],
    "@typescript-eslint/method-signature-style": ["error", "method"],
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-empty-interface": ["warn"],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-invalid-void-type": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-require-imports": "warn",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-literal-enum-member": "error",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/type-annotation-spacing": "error",

    // Requires type information
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-confusing-void-expression": [
      "error", {
        ignoreArrowShorthand: true,
      },
    ],
    "@typescript-eslint/no-floating-promises": ["error", { ignoreVoid: true }],
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "warn",

  },
};
