const eslintrc = require("./.eslintrc.js");
const base = require("@marknjunge/eslint-config")

module.exports = { 
  rules: { ...base.rules, ...eslintrc.rules } 
};
