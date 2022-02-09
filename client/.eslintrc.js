module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "ignorePatterns": [
        "src/styledComponents/*/*.js",
        "src/components/Chat/ChatLists.js"
    ],
    "rules": {
        "semi": [2, "always"],
        "quotes": [2, "double", { "avoidEscape": true }]
    }
};
