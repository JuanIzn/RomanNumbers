// tests.js

// Use Chai's expect for assertions
const expect = chai.expect;

describe('integerToRoman - AI-Assisted Test Cases', function() {
  const testCases = [
    { id: 'AIT1', input: 1, expected: 'I', reason: 'Boundary validation' },
    { id: 'AIT2', input: 3999, expected: 'MMMCMXCIX', reason: 'Comprehensive rule validation' },
    { id: 'AIT3', input: 5, expected: 'V', reason: 'Base symbol' },
    { id: 'AIT4', input: 10, expected: 'X', reason: 'Power of 10' },
    { id: 'AIT5', input: 50, expected: 'L', reason: 'Base symbol' },
    { id: 'AIT6', input: 100, expected: 'C', reason: 'Power of 10' },
    { id: 'AIT7', input: 500, expected: 'D', reason: 'Base symbol' },
    { id: 'AIT8', input: 1000, expected: 'M', reason: 'Power of 10' },
    { id: 'AIT9', input: 4, expected: 'IV', reason: 'Subtractive I-V' },
    { id: 'AIT10', input: 9, expected: 'IX', reason: 'Subtractive I-X' },
    { id: 'AIT11', input: 40, expected: 'XL', reason: 'Subtractive X-L' },
    { id: 'AIT12', input: 90, expected: 'XC', reason: 'Subtractive X-C' },
    { id: 'AIT13', input: 400, expected: 'CD', reason: 'Subtractive C-D' }
  ];

  testCases.forEach(({ id, input, expected, reason }) => {
    it(`${id}: should convert ${input} to "${expected}" (${reason})`, function() {
      expect(integerToRoman(input)).to.equal(expected);
    });
  });
});

describe('romanToInteger - AI-Assisted Test Cases', function() {
  const testCases = [
    { id: 'AIT14', input: 'I', expected: 1, reason: 'Boundary validation' },
    { id: 'AIT15', input: 'MMMCMXCIX', expected: 3999, reason: 'Comprehensive validation' },
    { id: 'AIT16', input: 'V', expected: 5, reason: 'Base symbol' },
    { id: 'AIT17', input: 'X', expected: 10, reason: 'Power of 10' },
    { id: 'AIT18', input: 'L', expected: 50, reason: 'Base symbol' },
    { id: 'AIT19', input: 'C', expected: 100, reason: 'Power of 10' },
    { id: 'AIT20', input: 'D', expected: 500, reason: 'Base symbol' },
    { id: 'AIT21', input: 'M', expected: 1000, reason: 'Power of 10' },
    { id: 'AIT22', input: 'IV', expected: 4, reason: 'Subtractive I-V' },
    { id: 'AIT23', input: 'IX', expected: 9, reason: 'Subtractive I-X' },
    { id: 'AIT24', input: 'XL', expected: 40, reason: 'Subtractive X-L' },
    { id: 'AIT25', input: 'CD', expected: 400, reason: 'Subtractive C-D' },
    { id: 'AIT26', input: 'mmxxiv', expected: 2024, reason: 'Case insensitivity' }
  ];

  testCases.forEach(({ id, input, expected, reason }) => {
    it(`${id}: should convert "${input}" to ${expected} (${reason})`, function() {
      expect(romanToInteger(input)).to.equal(expected);
    });
  });
});
