// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'no-tabs': 'off',
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
        MemberExpression: 1
      }
    ],
    'no-unused-vars': [
      0,
      {
        vars: 'all',
        args: 'all',
        caughtErrors: 'all'
      }
    ],
    semi: [2, 'always'],
    'space-before-function-paren': 0,
    'brace-style': 0,
    curly: [2, 'all'],
    'handle-callback-err': 0,
    'no-cond-assign': 0,
    'block-spacing': 0,
    camelcase: 0,
    'accessor-pairs': 0,
    'no-new': 0,
    'no-new-symbol': 0,
    'prefer-promise-reject-errors': 0,
    'padded-blocks': 0,
    'no-extra-semi': 2,
    'no-prototype-builtins': 0,
    'operator-linebreak': [2, 'before'],
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 1 }],
    'one-var': [2, 'never'],
    'dot-notation': 1,
    'computed-property-spacing': 2,
    'no-inline-comments': 2,
    'valid-jsdoc': [
      1,
      {
        prefer: {
          arg: 'param',
          argument: 'param',
          returns: 'return',
          virtual: 'abstract'
        },
        preferType: {
          Boolean: 'boolean',
          Number: 'number',
          String: 'string',
          object: 'Object',
          array: 'Array',
          function: 'Function',
          regExp: 'RegExp',
          date: 'Date',
          promise: 'Promise'
        },
        requireReturn: false,
        requireReturnDescription: false
      }
    ],
    'lines-around-comment': 2,
    'no-restricted-globals': 2,
    'no-else-return': 0,
    'max-params': [1, 6],
    'for-direction': 1,
    'no-await-in-loop': 1,
    'no-compare-neg-zero': 1,
    'no-empty': [1, { allowEmptyCatch: true }],
    'no-loop-func': 2,
    'no-return-await': 0,
    'no-useless-concat': 1,
    radix: 2,
    'no-unneeded-ternary': 0,
    'quote-props': [1, 'consistent-as-needed'],
    'semi-style': 1,
    'no-useless-escape': 0,
    'operator-linebreak': 0
  }
};
