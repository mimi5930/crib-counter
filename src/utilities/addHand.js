// Each combination that adds up to 15 is worth 2 points (no matter how many cards are involved).
export function checkSums(hand) {
  // create array of numbers
  let handNumbers = [];
  for (let i = 0; i < hand.length; i++) {
    handNumbers.push(hand[i][1]);
  }
  console.log(handNumbers);
  // convert strings into numbers

  return 0;
}
// Each pair is worth 2 points
export function checkPairs(hand) {
  return 0;
}
// Three of a kind
export function checkThreeOfAKind(hand) {}
// Four of a kind
export function checkFourOfAKind(hand) {}
// Cards in consecutive order (i.e. – 5-6-7-8)
export function checkRun(hand) {}
// All four cards in your hand are of the same suit (sometimes the four-card flush does not count, see below)
// All five cards in your hand (and using the starter) are the same suit
export function checkFlush(hand) {}

// Jack of the same suit as the starter. Referred to as “One for his nobs/nob” in the United Kingdom.
export function checkNobs(hand) {}
