import React from "react";
import _ from "lodash";

import { Emoji } from "./emojis";

interface Props {
  emojis: Emoji[];
}

const shuffleEmojis = (deck: Emoji[]) => {
  return _.shuffle([...deck, ...deck]);
};

export const useMatchingPairs = ({ emojis = [] }: Props) => {
  const [randomEmojis, setEmojis] = React.useState(shuffleEmojis(emojis));
  const [moveCount, setMoveCount] = React.useState(0);

  const [selectedCardIndex, setSelectedCardIndex] = React.useState<
    number | null
  >(null);
  const [compareCardIndex, setCompareCardIndex] = React.useState<number | null>(
    null
  );

  const [matchingIndexes, setMatchingIndex] = React.useState<number[]>([]);

  const handlePress = (index: number) => {
    if (selectedCardIndex === null) {
      setSelectedCardIndex(index);
      return;
    }

    setMoveCount((previous) => previous + 1);

    if (randomEmojis[selectedCardIndex].emoji === randomEmojis[index].emoji) {
      setMatchingIndex([...matchingIndexes, selectedCardIndex, index]);
    }

    setCompareCardIndex(index);
    setTimeout(() => {
      setSelectedCardIndex(null);
      setCompareCardIndex(null);
    }, 500);
  };

  const resetGame = () => {
    setEmojis(shuffleEmojis(emojis));
    setMoveCount(0);
    setSelectedCardIndex(null);
    setCompareCardIndex(null);
    setMatchingIndex([]);
  };

  // Better way to do this?
  const visibleCards = [...matchingIndexes];
  if (selectedCardIndex !== null) {
    visibleCards.push(selectedCardIndex);
  }
  if (compareCardIndex !== null) {
    visibleCards.push(compareCardIndex);
  }

  return {
    randomEmojis,
    handlePress,
    moveCount,
    visibleCards,
    isGameComplete: matchingIndexes.length === randomEmojis.length,
    resetGame,
  };
};
