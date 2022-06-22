import { useState } from "react";
import _ from "lodash";

export type Emoji = string;

const emojiList: Emoji[] = [
  "🤠",
  "😈",
  "👻",
  "🦖",
  "🥕",
  "📬",
  "📸",
  "🦦",
  "🙀",
  "🏄",
  "😇",
  "🏳️‍🌈",
  "💣",
];

const shuffleEmojis = () => {
  // Shuffle the deck of emojis so we get different ones each game
  const shortenedDeck = _.shuffle(emojiList).slice(0, 8);
  // Shuffle the active deck so the card at 0 doesn't always equal the card at 8
  return _.shuffle([...shortenedDeck, ...shortenedDeck]);
};

export const useMatchGame = () => {
  const [emojis, setEmojis] = useState(shuffleEmojis());
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [comparisonCards, setComparisonCards] = useState<number[]>([]);
  const [totalMoves, setTotalMoves] = useState(0);

  const reset = () => {
    setEmojis(shuffleEmojis());
    setMatchedCards([]);
    setComparisonCards([]);
    setTotalMoves(0);
  };

  const chooseCard = (index: number) => {
    // we're comparing this card to a previously selected card
    if (comparisonCards.length === 1) {
      // don't let them choose the same card twice
      if (comparisonCards[0] === index) {
        return;
      }

      // increase move count
      setTotalMoves((moves) => moves + 1);

      setComparisonCards((cards) => {
        // get the selected cards
        const newCards = [...cards, index];

        // compare the emojis. If they match, update the visible cards
        if (emojis[newCards[0]] === emojis[newCards[1]]) {
          setMatchedCards((c) => [...c, ...newCards]);
        }

        // return the update selected cards so the user can see both at the same time
        return newCards;
      });
    } else {
      // new guess, reset the array
      setComparisonCards([index]);
    }
  };

  return {
    emojis,
    reset,
    chooseCard,
    activeCardIndex: comparisonCards[comparisonCards.length - 1],
    matchedCards,
    comparisonCards,
    totalMoves,
    matchCount: matchedCards.length / 2,
    totalPairs: emojis.length / 2,
  };
};
