import {
  checkSums,
  checkPairs,
  checkThreeOfAKind,
  checkFourOfAKind,
  checkRun,
  checkFlush,
  checkNobs
} from '../addHand';

describe('checkSums', () => {
  const sampleHand = [
    ['d', '4'],
    ['d', '5'],
    ['d', '6'],
    ['d', 'k'],
    ['d', 'q', 's']
  ];
  test('returns a number', () => {
    expect(typeof checkSums(sampleHand)).toBe('number');
  });
  test('returns a score of 6', () => {
    expect(checkSums(sampleHand)).toBe(6);
  });
});

describe('checkPairs', () => {
  const sampleHand = [
    ['d', '4'],
    ['s', '4'],
    ['d', '6'],
    ['d', 'k'],
    ['d', 'q', 's']
  ];
  test('returns a number', () => {
    expect(typeof checkPairs(sampleHand)).toBe('number');
  });
  test('returns a score of 2', () => {
    expect(checkPairs(sampleHand)).toBe(6);
  });
});
