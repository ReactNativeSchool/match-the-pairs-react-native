import { useState } from "react";
import _ from "lodash";

export type Emoji = {
  emoji: string;
};

const emojiList: Emoji[] = [
  {
    emoji: "🤠",
  },
  {
    emoji: "😈",
  },
  {
    emoji: "👻",
  },
  {
    emoji: "🦖",
  },
  {
    emoji: "☃️",
  },
  {
    emoji: "🥕",
  },
  {
    emoji: "📬",
  },
  {
    emoji: "📸",
  },
];

const shuffleEmojis = (deck: Emoji[]) => {
  return _.shuffle([...deck, ...deck]);
};

export const useMatchGame = () => {
  const [emojis, setEmojis] = useState(shuffleEmojis(emojiList));
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [comparisonCards, setComparisonCards] = useState<number[]>([]);
  const [totalMoves, setTotalMoves] = useState(0);

  const reset = () => {
    setEmojis(shuffleEmojis(emojiList));
    setVisibleCards([]);
    setComparisonCards([]);
    setTotalMoves(0);
  };

  const chooseCard = (index: number) => {
    // we're comparing this card to a previously selected card
    if (comparisonCards.length === 1) {
      // increase move count
      setTotalMoves((moves) => moves + 1);

      setComparisonCards((cards) => {
        // get the selected cards
        const newCards = [...cards, index];

        // compare the emojis. If they match, update the visible cards
        if (emojis[newCards[0]] === emojis[newCards[1]]) {
          setVisibleCards((c) => [...c, ...newCards]);
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
    activeCardIndex: comparisonCards[0],
    visibleCards: [...visibleCards, ...comparisonCards],
    totalMoves,
    matchCount: visibleCards.length / 2,
    totalPairs: emojiList.length,
  };
};
