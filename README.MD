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

Enable [Linting with Type Information](https://github.com/typescript-eslint/typescript-eslint/blob/893130f533173c8f34a15088f7994362d0ffffec/docs/getting-started/linting/TYPED_LINTING.md)

```diff
 module.exports = {
   parser: "@typescript-eslint/parser",
+  parserOptions: {
+    tsconfigRootDir: __dirname,
+    project: ["./tsconfig.json"],
+  },
   plugins: ["@typescript-eslint"],
   extends: [
     "eslint:recommended",
     "plugin:@typescript-eslint/recommended",
+    "plugin:@typescript-eslint/recommended-requiring-type-checking",
     "@marknjunge/eslint-config-ts",
   ],
 };
```

Add the following helpful scripts

```json
"lint": "eslint **/*.{ts,js}",
"lint:fix": "eslint **/*.{ts,js} --fix"
```
