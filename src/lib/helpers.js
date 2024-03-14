'use strict';

/**
 * Parses a token to determine if it contains an !important modifier.
 * An important modifier is indicated by starting the token with '!'.
 *
 * @param {string} token - The token to parse.
 * @returns {[boolean, string]} - A tuple where the first element indicates
 * whether the token is an important modifier (true) or not (false), and the
 * second element is the token itself without the '!' character if present.
 */
export const parseImportantModifier = (token) => {
  if (token.startsWith('!'))
    return [true, token.slice(1)];

  return [false, token];
};
