module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "commonjs": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "babel",
    "react-hooks"
  ],
  "rules": {
    "template-curly-spacing": 0,
    "indent": [1, 2, { "SwitchCase": 1, "flatTernaryExpressions": true, "ignoredNodes": ["TemplateLiteral"] }],
    "semi": [1, "never"],
    "quotes": [1, "single"],
    "linebreak-style": [1, "unix"],
    "no-console": [1, { "allow": ["log", "warn", "error"] }],
    "no-constant-condition": 0,
    "babel/camelcase": 1,
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-uses-vars": 2,
    "react/jsx-uses-react": 2,
    "react/react-in-jsx-scope": 1,
    "react/require-default-props": 0,
    "react/prop-types": [0, { ignore: ["children"] }],
    "react/display-name": [0, { "ignoreTranspilerName": false }],
    "react/require-default-props": [1, { forbidDefaultForRequired: true }],
    "react/jsx-props-no-multi-spaces": 2,
    "react/jsx-handler-names": 2,
    "no-unexpected-multiline": 1,
    "no-unused-vars":
      [1, { "vars": "all", "args": "none", "caughtErrors": "none" }],
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
  }
};