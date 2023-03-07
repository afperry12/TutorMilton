module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
    "ecmaVersion": 6
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    ".eslintrc.js",
    "setupProject.js",
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "quotes": ["error", "double"],
    "indent": "off",
    "linebreak-style": "off",
    'object-curly-spacing': ['error', 'always'],
  'quotes': ['error'],
  'eol-last': ["error", "never"],
  "comma-dangle": [2, "always-multiline"], 
  "max-len": ['off'],
  "require-jsdoc" : 0,
  },
};
