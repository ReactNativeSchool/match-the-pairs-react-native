import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { StatsCard, GameCard } from "components/cards";
import { Button } from "components/buttons";

import { Spacing, Colors } from "constants/index";

import { useMatchGame, Emoji } from "hooks/useMatchGame";

const ROWS = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
];

const MatchThePairs = () => {
  const {
    emojis,
    reset,
    chooseCard,
    activeCardIndex,
    matchedCards,
    comparisonCards,
    totalMoves,
    matchCount,
    totalPairs,
  } = useMatchGame();

  const handlePress = (index: number) => {
    chooseCard(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={[styles.row, styles.header]}>
        <Text style={styles.headerText}>Match the pairs 🤔</Text>
      </View>

      <View style={[styles.row, styles.stats]}>
        <StatsCard
          title="Pairs matched"
          primaryValue={matchCount}
          secondaryValue={totalPairs}
        />
        <StatsCard title="Total moves" primaryValue={totalMoves} />
      </View>

      {ROWS.map((indices, rowIndex) => (
        <View style={[styles.row, styles.gameRow]} key={rowIndex}>
          {indices.map((emojiIndex) => {
            const inMatchedCard = matchedCards.includes(emojiIndex);
            const cardIsVisible =
              inMatchedCard || comparisonCards.includes(emojiIndex);

            return (
              <GameCard
                key={emojiIndex}
                index={emojiIndex}
                emojis={emojis}
                onPress={() => handlePress(emojiIndex)}
                selected={activeCardIndex === emojiIndex}
                visible={cardIsVisible}
                disabled={inMatchedCard}
              />
            );
          })}
        </View>
      ))}

      <View style={[styles.row, styles.actions]}>
        <Button type="primary" onPress={() => reset()}>
          Reset game
        </Button>
        <Button onPress={() => alert("todo")}>Share game</Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: Colors.greyDarkest,
    fontSize: 20,
    fontWeight: "600",
    marginTop: Spacing.md,
    marginBottom: Spacing.xl,
  },
  row: {
    flexDirection: "row",
    marginHorizontal: Spacing.sm,
  },
  gameRow: {
    flex: 1,
  },
  header: {
    marginHorizontal: Spacing.md,
  },
  stats: {
    marginBottom: Spacing.lg,
  },
  actions: {
    justifyContent: "center",
    marginTop: Spacing.xl,
  },
});

export default MatchThePairs;
