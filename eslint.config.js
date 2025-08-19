// eslint.config.js (CommonJS)
const globals = require("globals");
const pluginJs = require("@eslint/js");

module.exports = [
  {
    // Configuración para código normal
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node
      }
    },
    plugins: {},
    rules: {
      "no-unused-vars": "warn",          
      "no-undef": "error",               
      "eqeqeq": ["error", "always"],     
      "semi": ["error", "always"],       
      "quotes": ["error", "double"],     
      "indent": ["error", 2],            
      "curly": "error",                 
      "no-console": "off"               
    }
  },

  {
    // Configuración específica para archivos de test Jest
    files: ["**/*.test.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    plugins: {},
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "eqeqeq": ["error", "always"],
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "indent": ["error", 2],
      "curly": "error",
      "no-console": "off"
    }
  },

  pluginJs.configs.recommended
];
