import React from "react";
import _ from "lodash";

import emojis, { Emoji } from "./emojis";

interface Props {
  emojis: Emoji[];
}

const shuffleEmojis = (deck: Emoji[]) => {
  return _.shuffle([...deck, ...deck]);
};

const initialState = {
  randomEmojis: shuffleEmojis(emojis),
  moveCount: 0,
  selectedCardIndex: null,
  compareCardIndex: null,
  matchingIndexes: [],
};

type ReducerState = {
  randomEmojis: Emoji[];
  moveCount: number;
  selectedCardIndex: number | null;
  compareCardIndex: number | null;
  matchingIndexes: number[];
};

type ReducerAction =
  | {
      type: "CLEAR_SELECTIONS" | "RESET";
    }
  | {
      type: "INITIAL_SELECTION" | "COMPARE_SELECTION";
      payload: number;
    };

const reducer = (state: ReducerState, action: ReducerAction) => {
  switch (action.type) {
    case "INITIAL_SELECTION":
      return {
        ...state,
        selectedCardIndex: action.payload,
      };
    case "COMPARE_SELECTION":
      let matchingIndexes = [...state.matchingIndexes];
      if (
        state.selectedCardIndex &&
        state.randomEmojis[state.selectedCardIndex].emoji ===
          state.randomEmojis[action.payload]?.emoji
      ) {
        matchingIndexes = [
          ...state.matchingIndexes,
          state.selectedCardIndex,
          action.payload,
        ];
      }

      return {
        ...state,
        moveCount: state.moveCount + 1,
        compareCardIndex: action.payload,
        matchingIndexes,
      };
    case "CLEAR_SELECTIONS":
      return {
        ...state,
        selectedCardIndex: null,
        compareCardIndex: null,
      };
    case "RESET":
      // Reshuffle the emojis otherwise it will be the same as the first game
      return { ...initialState, randomEmojis: shuffleEmojis(emojis) };
    default:
      return state;
  }
};

export const useMatchingPairs = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const {
    randomEmojis,
    moveCount,
    selectedCardIndex,
    compareCardIndex,
    matchingIndexes,
  } = state;

  const handlePress = (index: number) => {
    if (selectedCardIndex === null) {
      dispatch({ type: "INITIAL_SELECTION", payload: index });
      return;
    }

    dispatch({ type: "COMPARE_SELECTION", payload: index });
    setTimeout(() => {
      dispatch({ type: "CLEAR_SELECTIONS" });
    }, 500);
  };

  const resetGame = () => {
    dispatch({ type: "RESET" });
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
    pairsMatched: matchingIndexes.length / 2,
    totalPairs: randomEmojis.length / 2,
    resetGame,
  };
};
