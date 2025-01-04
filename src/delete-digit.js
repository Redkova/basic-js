const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numToSting = n.toString();
  let max = 0;

  for (let i = 0; i < numToSting.length; i++) {
    const numWithoutDigit = parseInt(numToSting.slice(0, i) + numToSting.slice(i + 1), 10);

    if (numWithoutDigit > max) {
      max = numWithoutDigit;
    }
  }

  return max;
}

module.exports = {
  deleteDigit
};
