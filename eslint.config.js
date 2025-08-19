import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["src/**/*.js"],
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
