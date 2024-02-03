# eslint-config-ts

[![npm (scoped)](https://img.shields.io/npm/v/@marknjunge/eslint-config-ts)](https://www.npmjs.com/package/@marknjunge/eslint-config-ts)

My ESLint config for Typescript

## Usage

1. Install the package

```
npm install --save-dev @marknjunge/eslint-config-ts
```

2. Add it to the `extends` section of your `.eslintrc` file.

```javascript
extends: ["...", "@marknjunge/eslint-config-ts"]
```

3. Add `@stylistic` to plugins

```diff
- plugins: ["@typescript-eslint"],
+ plugins: ["@typescript-eslint", "@stylistic"],
```

4. Add the following helpful scripts (optional)

```json
"lint": "eslint **/*.{ts,js}",
"lint:fix": "eslint **/*.{ts,js} --fix"
```

**NB**: If your project contains javascript, you may need to disable type checking for js files.

```diff
// .eslintrc.js

module.exports = {
+  overrides: [
+    {
+      files: ["*.js"],
+      extends: ["plugin:@typescript-eslint/disable-type-checked"],
+    }
+  ]
};
```
