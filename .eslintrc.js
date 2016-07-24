module.exports = {
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  "env": {
    "es6": true,
  },
  "extends": "eslint-config-airbnb",
  "rules": {
    // override defaults for rule from base configurations
    "import/no-unresolved": 0,
  }
}
