'use strict';

const handleValue = require('./handle-value');

/**
 * Handles the values of a pair of CSS properties, considering any important modifiers and mapping values if necessary.
 *
 * @param {string[]} values - An array containing the values of the CSS properties.
 * @param {string[]} keys - An array containing the keys of the CSS properties.
 * @param {string[]} styles - An array containing CSS styles.
 * @param {boolean} [mapValues=true] - A flag indicating whether to map values using constants.valuesMapper. Default is true.
 * @returns {string[]} - An array containing CSS styles updated with the new properties.
 */
module.exports = function handlePairValue(values, keys, styles, mapValues = true) {
  if (values.length == 1) {
    styles = handleValue(values[0], keys[0], styles, mapValues);
    styles = handleValue(values[0], keys[1], styles, mapValues);

    return styles;
  }

  if (values[0] !== '_')
    styles = handleValue(values[0], keys[0], styles, mapValues);

  if (values[1] !== '_')
    styles = handleValue(values[1], keys[1], styles, mapValues);

  return styles;
};
