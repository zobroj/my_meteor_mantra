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
    "no-undef": 0, // Mantra imports a lot of files automagically
    "max-len": 0, // Sometimes you just gotta be verbose
  }
}
