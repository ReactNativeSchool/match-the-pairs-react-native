import React from "react";
import { StyleSheet, SafeAreaView, Text, View, Button } from "react-native";

import { Grid } from "./components/Grid";
import { useMatchingPairs } from "./useMatchGame";

export default function App() {
  const {
    randomEmojis,
    handlePress,
    moveCount,
    visibleCards,
    isGameComplete,
    resetGame,
  } = useMatchingPairs();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Grid
        emojis={randomEmojis}
        onPress={handlePress}
        matchingIndexes={visibleCards}
      />
      <View style={styles.stats}>
        <Text style={styles.text}>Total Moves: {moveCount}</Text>
        {isGameComplete && <Button title="Reset" onPress={resetGame} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  stats: {
    marginVertical: 30,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});
