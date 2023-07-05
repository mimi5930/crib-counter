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

// describe('checkPairs', () => {
//   const sampleHand = [
//     ['d', '4'],
//     ['s', '4'],
//     ['d', '6'],
//     ['d', 'k'],
//     ['d', 'q', 's']
//   ];
//   const doubleHand = [
//     ['d', '4'],
//     ['s', '4'],
//     ['d', '6'],
//     ['c', '6'],
//     ['d', 'q', 's']
//   ];
//   test('returns a number', () => {
//     expect(typeof checkPairs(sampleHand)).toBe('number');
//   });
//   test('returns a score of 2', () => {
//     expect(checkPairs(sampleHand)).toBe(2);
//   });
//   test('returns a score of 4', () => {
//     expect(checkPairs(doubleHand)).toBe(4);
//   });
// });

// describe('checkThreeOfAKind', () => {
//   const exampleHandOne = [
//     ['d', '4'],
//     ['s', '4'],
//     ['c', '4'],
//     ['d', 'k'],
//     ['d', 'q', 's']
//   ];
//   const exampleHandTwo = [
//     ['d', 'k'],
//     ['s', '4'],
//     ['c', '4'],
//     ['d', 'k'],
//     ['d', 'k', 's']
//   ];
//   test('returns a number', () => {
//     expect(typeof checkThreeOfAKind(exampleHandOne)).toBe('number');
//   });
//   test('returns a score of 6', () => {
//     expect(checkThreeOfAKind(exampleHandOne)).toBe(6);
//   });
//   test('returns a score of 6', () => {
//     expect(checkThreeOfAKind(exampleHandTwo)).toBe(6);
//   });
// });
