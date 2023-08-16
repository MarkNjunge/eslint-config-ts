# eslint-config-ts

[![npm (scoped)](https://img.shields.io/npm/v/@marknjunge/eslint-config-ts)](https://www.npmjs.com/package/@marknjunge/eslint-config-ts)

My ESLint config for Typescript

## Usage

Install the package

```
npm install --save-dev @marknjunge/eslint-config-ts
```

Add it to the `extends` section of your `.eslintrc` file.

```javascript
extends: ["...", "@marknjunge/eslint-config-ts"]
```

Enable [Linting with Type Information](https://typescript-eslint.io/linting/typed-linting)

```diff
 module.exports = {
   parser: "@typescript-eslint/parser",
+  parserOptions: {
+    project: true,
+    tsconfigRootDir: __dirname,
+  },
   plugins: ["@typescript-eslint"],
+  overrides: [
+    {
+      files: ["*.js"],
+      extends: ["plugin:@typescript-eslint/disable-type-checked"],
+    }
+  ]
 };
```

Add the following helpful scripts

```json
"lint": "eslint **/*.{ts,js}",
"lint:fix": "eslint **/*.{ts,js} --fix"
```
