import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  {
    globals: {
      ...globals.browser,
      require: "readonly",
      module: "readonly",
      __dirname: "readonly",
      jest: "readonly"
    },
    env: {
      browser: true,
      es2021: true
    },
    parser: "@babel/eslint-parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 12,
      sourceType: "module"
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    plugins: ["react"],
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "single"],
      semi: ["error", "always"]
    }
  },
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig)
];
