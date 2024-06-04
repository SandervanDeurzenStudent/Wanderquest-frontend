export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      parser: babelParser,
      requireConfigFile: false, // Voeg deze regel toe
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
  // Fixup regels en configuraties
];
