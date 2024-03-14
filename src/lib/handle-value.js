'use strict';

import constants from './constants';
import parseImportantModifier from './parse-important-modifier';

/**
 * Handles the value of a CSS property, considering any important modifier and mapping values if necessary.
 *
 * @param {string} value - The value of the CSS property.
 * @param {string} key - The CSS property key.
 * @param {string[]} styles - An array containing CSS styles.
 * @param {boolean} [mapValues=true] - A flag indicating whether to map values using constants.valuesMapper. Default is true.
 * @returns {string[]} - An array containing CSS styles updated with the new property.
 */
export default function handleValue(value, key, styles, mapValues = true) {
  const [isImportant, token] = parseImportantModifier(value);
  const important = isImportant ? ' !important' : '';
  const resultValue = mapValues ? constants.valuesMapper[token] : token;

  styles.push(`${key}: ${resultValue}${important};`);

  return styles;
}
