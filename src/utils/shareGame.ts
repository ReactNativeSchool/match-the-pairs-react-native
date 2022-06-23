import { Share } from "react-native";

type shareGameProps = {
  emojis: string[];
  moveCount: number;
};

const buildRow = (emojis: string[], start: number, end: number) =>
  emojis.slice(start, end).join(" ");

export const shareGame = async ({ emojis, moveCount }: shareGameProps) => {
  const row1 = buildRow(emojis, 0, 4);
  const row2 = buildRow(emojis, 4, 8);
  const row3 = buildRow(emojis, 8, 12);
  const row4 = buildRow(emojis, 12, 16);

  const emojiBoard = [row1, row2, row3, row4].join("\n");
  return Share.share({
    message: `I just beat Match the pairs in ${moveCount} moves!\n${emojiBoard}`,
  });
};
