import jsdoc from "eslint-plugin-jsdoc";
import babelParser from "@babel/eslint-parser";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      parser: babelParser,
      globals: {
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        jest: "readonly"
      }
    },
    plugins: {
      jsdoc: jsdoc
    },
    rules: {
      "jsdoc/require-description": "error",
      "jsdoc/check-values": "error"
    }
  },
  // Verwijder de tweede configuratie van de 'react' plugin
  ...fixupConfigRules(pluginReactConfig)
];
