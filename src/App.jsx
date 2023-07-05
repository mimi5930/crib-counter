import counter from 'cribbage-counter';
import { useState } from 'react';

export default function App() {
  // const [hand, setHand] = useState('');

  const hand = '9D,9C,4H,8S,5S';
  const handScore = counter.scoreHand(hand, false);
  console.log(handScore);
  return <div></div>;
}
