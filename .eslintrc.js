module.exports = {
    "root": true,
    "parser": "vue-eslint-parser",
    "extends": [
        // "eslint:recommended",
        "airbnb-base",
        "plugin:vue/recommended",
        "prettier",
        "prettier/vue"
    ],
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2019,
        "sourceType": "module",
        // "ecmaFeatures": {
        //     "jsx": true
        // }
        "allowImportExportEverywhere": true
        // "codeFrame": false
    },
    "plugins": ["vue", "prettier"],
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
        // "jest": true
    },
    "globals": {
        "window": false,
        "document": false,
        "navigator": false
    },
    "rules": {
        "no-new": 0,
        "no-shadow": 0,
        "camelcase": [0, {
            "properties": "always"
        }],
        "func-names": 0,
        "no-console": 0,
        "no-plusplus": 0,
        "arrow-parens": 2,
        "comma-dangle": 0,
        "default-case": 0,
        "prefer-template": 0,
        "consistent-return": 0,
        "no-param-reassign": 0,
        "no-nested-ternary": 0,
        "operator-linebreak": 0,
        "object-curly-newline": 0,
        "no-underscore-dangle": 1,
        "no-unused-expressions": 0,
        "no-restricted-globals": 0,
        "function-paren-newline": 0,
        "class-methods-use-this": 0,
        "implicit-arrow-linebreak": 0,
        "space-before-function-paren": 0,
        "max-len": ["error", {
            "code": 150
        }],
        // "prefer-destructuring": ["error", {
        //     "object": true,
        //     "array": false
        // }],
        "prefer-destructuring": 0,
        "vue/no-v-html": 0,
        "vue/attributes-order": 0,
        "vue/require-v-for-key": 0,
        "vue/require-default-prop": 0,
        "vue/no-unused-components": ["error", {
            "ignoreWhenBindingPresent": false
        }],
        "vue/no-unused-vars": 2, // "error"
        "vue/max-attributes-per-line": ["error", {
            "singleline": 1,
            "multiline": {
                "max": 1,
                "allowFirstLine": false
            }
        }],
        "vue/singleline-html-element-content-newline": 0,
        "vue/name-property-casing": ["error", "kebab-case"],
        "vue/component-name-in-template-casing": ["error", "kebab-case"],
        "vue/html-closing-bracket-newline": 2,
        "prettier/prettier": "error",
    }
}