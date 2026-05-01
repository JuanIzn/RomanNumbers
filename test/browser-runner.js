// browser-runner.js
if (typeof window !== 'undefined') {
  // Use Chai's expect for assertions (loaded in test.html)
  const expect = chai.expect;

  describe('integerToRoman - Test Cases', function() {
    window.integerToRomanCases.forEach(({ id, input, expected, reason }) => {
      it(`${id}: should convert ${input} to "${expected}" (${reason})`, function() {
        expect(integerToRoman(input)).to.equal(expected);
      });
    });
  });

  describe('romanToInteger - Test Cases', function() {
    window.romanToIntegerCases.forEach(({ id, input, expected, reason }) => {
      it(`${id}: should convert "${input}" to ${expected} (${reason})`, function() {
        expect(romanToInteger(input)).to.equal(expected);
      });
    });
  });
}
