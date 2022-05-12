import React from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";

import { Grid } from "./components/Grid";
import { useMatchingPairs } from "./useMatchGame";
import { Button } from "./components/Button";

export default function App() {
  const {
    randomEmojis,
    handlePress,
    moveCount,
    visibleCards,
    resetGame,
    pairsMatched,
    totalPairs,
  } = useMatchingPairs();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.stats}>
        <Text style={styles.text}>Total moves: {moveCount}</Text>
        <Text style={styles.text}>
          Pairs matched: {pairsMatched}/{totalPairs}
        </Text>
      </View>
      <Grid
        emojis={randomEmojis}
        onPress={handlePress}
        matchingIndexes={visibleCards}
      />
      <View style={styles.action}>
        <Button title="Reset game" onPress={resetGame} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  stats: {
    marginVertical: 30,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
    color: "#34383c",
    backgroundColor: "#e8ebed",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  action: {
    alignItems: "flex-start",
    margin: 10,
  },
});
