'use strict';

const parseFlexupValue = require('./lib/parse-flexup-value');

module.exports = () => {
  return {
    postcssPlugin: 'postcss-flexup',
    Declaration: {
      flexup: (decl) => {
        decl.parent.append(parseFlexupValue(decl.toString()));
        decl.remove();
      }
    }
  };
};

module.exports.postcss = true;
