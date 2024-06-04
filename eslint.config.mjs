import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        require: "readonly",
        module: "readonly",
        __dirname: "readonly"
      },
      ecmaVersion: 12,
      sourceType: "module"
    },
    env: {
      browser: true,
      node: true,
      jest: true
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
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
  }
];
