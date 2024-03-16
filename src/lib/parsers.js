import constants from './constants';
import { handleValue, handlePairValue } from './handlers';

/**
 * Parses a flexbox-related declaration value and generates corresponding CSS styles.
 *
 * @param {string} declValue - The declaration value to parse.
 * @returns {string} - A string containing CSS styles generated from the parsed declaration value.
 */
export const parseFlexupValue = (declValue) => {
  let styles = [...constants.baseStyles];
  const tokens = declValue.split(' ');

  tokens.forEach((x) => {
    if (x == '_') {
      // nothing-to-do
      // TODO: Change regex so it doesn't include _ as a valid value
    } else if (x.match(constants.matchAlignValues)) {
      styles = handlePairValue(
        x.split('/'),
        ['justify-content', 'align-items'],
        styles,
        true
      );
    } else if (x.match(constants.matchWrapValues)) {
      styles = handleValue(x, 'flex-wrap', styles);
    } else if (x.match(constants.matchDirValues)) {
      styles = handleValue(x, 'flex-direction', styles);
    } else if (x.match(constants.matchGapValues)) {
      styles = handlePairValue(
        x.split('/'),
        ['column-gap', 'row-gap'],
        styles,
        false
      );
    }
  });

  return '\n' + styles.join('\n');
};
