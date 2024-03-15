import { parseFlexupValue } from './lib/parsers';

/**
 * @returns {import('postcss').Plugin}
 */
export default function postcssFlexup() {
  return {
    postcssPlugin: 'postcss-flexup',
    Declaration: {
      flexup: (decl) => {
        decl.parent.append(parseFlexupValue(decl.toString()));
        decl.remove();
      }
    }
  };
}

postcssFlexup.postcss = true;
