module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'import/extensions': 'off',
    "linebreak-style":0,
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/no-string-refs': 'off',
    'react/prefer-stateless-function': 'off',
    'react/no-multi-comp': 'off',
    'react/sort-comp': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-no-bind': 'off',
    'react/no-array-index-key': 'off',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'no-console': 'off',
    'arrow-parens': 'off',
    'consistent-return': 'off',
    'no-mixed-operators': 'off',
    'no-use-before-define': 'off',
    'no-unused-expressions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'max-len': ['warn', 120],
    'no-param-reassign': ['error', { props: false }],
    camelcase: 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
  },
  globals: {
    fetch: true,
    require: true,
    api: true,
    logger: true,
    tracker: true,
    constants: true,
    navigator: true,
    document: true,
    window: true,
  },
};
