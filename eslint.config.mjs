import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  {
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    plugins: ["react"],
    rules: {
      // Voeg hier JavaScript lintregels toe
      // Bijvoorbeeld:
      // "indent": ["error", 2],
      // "quotes": ["error", "single"],
      // "semi": ["error", "always"]
    }
  },
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        jest: "readonly"
      }
    }
  }
];
