import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import _ from "lodash";

import { Emoji } from "../emojis";

interface GridProps {
  emojis: Emoji[];
  onPress: (index: number) => void;
  matchingIndexes: number[];
}

interface CardProps {
  emoji: Emoji;
  onPress: () => void;
  active: boolean;
}

const Card = ({ onPress, emoji, active }: CardProps) => {
  return (
    <Pressable onPress={() => onPress()} style={styles.item}>
      <Text style={styles.itemText}>{active ? emoji.emoji : "❓"}</Text>
    </Pressable>
  );
};

const CHUNK_SIZE = 4;
export const Grid = ({ emojis = [], onPress, matchingIndexes }: GridProps) => {
  const groups: Emoji[][] = _.chunk(emojis, CHUNK_SIZE);

  return (
    <View style={styles.container}>
      {groups.map((g, groupIndex) => {
        return (
          <View style={styles.row}>
            {g.map((e, rowIndex) => {
              const emojiIndex = groupIndex * CHUNK_SIZE + rowIndex;

              return (
                <Card
                  emoji={e}
                  onPress={() => {
                    onPress(emojiIndex);
                  }}
                  active={matchingIndexes.includes(emojiIndex)}
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    marginHorizontal: 5,
  },
  row: {
    flexDirection: "row",
  },
  item: {
    flex: 1,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 8,
    borderColor: "#ccc",
    borderWidth: 2,
    backgroundColor: "#f3f3f3",
  },
  itemText: { fontSize: 50 },
});
