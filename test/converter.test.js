const test = require('node:test');
const assert = require('node:assert/strict');
const { integerToRoman, romanToInteger } = require('../script');
const { integerToRomanCases, romanToIntegerCases } = require('./cases');

for (const { id, input, expected, reason } of integerToRomanCases) {
  test(`${id}: should convert ${input} to "${expected}" (${reason})`, () => {
    assert.equal(integerToRoman(input), expected);
  });
}

for (const { id, input, expected, reason } of romanToIntegerCases) {
  test(`${id}: should convert "${input}" to ${expected} (${reason})`, () => {
    assert.equal(romanToInteger(input), expected);
  });
}
