import { faker } from '@faker-js/faker';

//  Card values should be recorded as such: a,2,3,4,5,6,7,8,9,t,j,k,q
// Suits should be recorded as: s (spades), d (diamonds), h (hearts), c (clubs)

const suits = faker.string.fromCharacters('sdhc', 5);
const values = faker.string.fromCharacters('a23456789tjkq', 5);

const hand = createHand(suits, values, 5);

function createHand(suits, values, amount) {
  let fakeHand = [];
  for (let i = 0; i < amount; i++) {
    fakeHand = [...fakeHand, [suits[i], values[i]]];
  }
  return fakeHand;
}

const sampleHand = [
  ['d', '4'],
  ['d', '5'],
  ['d', '6'],
  ['d', 'k'],
  ['d', 'q', 's']
];

console.log(hand);
