# eslint-config-ts

[![npm (scoped)](https://img.shields.io/npm/v/@marknjunge/eslint-config-ts)](https://www.npmjs.com/package/@marknjunge/eslint-config-ts)

My ESLint config for Typescript.

## Usage

1. Initialize ESLint based on the documentation: [Getting Started with ESLint](https://eslint.org/docs/latest/use/getting-started)

```shell
npm init @eslint/config@latest
```

2. Install the package

```shell
npm install -D @marknjunge/eslint-config-ts
```

3. Replace `tseslint.configs.recommended` with the config.

```diff
+ import markConfig from "@marknjunge/eslint-config-ts";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"], },
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.node }, },
+ markConfig,
- tseslint.configs.recommended,
]);
```

Alternatively to override rules,

```javascript
export default defineConfig([
  // Default configs ...
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js },
    extends: [markConfig],
    rules: {
      '@typescript-eslint/require-await': 'warn',
      '@typescript-eslint/no-misused-promises': 'warn'
    }
  },
]);
```

See [Using a Shareable Config](https://eslint.org/docs/latest/extend/shareable-configs#using-a-shareable-config) for other ways to use the config.

Note: You may need to include `eslint.config.mjs` in your `tsconfig.json`
```diff
{
  "include": [
    "src/**/*",
+    "eslint.config.mjs",
  ],
}
```
