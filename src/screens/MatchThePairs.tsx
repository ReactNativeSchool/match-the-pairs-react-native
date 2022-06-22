import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { StatsCard, GameCard } from "components/cards";
import { Button } from "components/buttons";

import { Spacing, Colors } from "constants/index";

const MatchThePairs = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={[styles.row, styles.header]}>
        <Text style={styles.headerText}>Match the pairs 🤔</Text>
      </View>
      <View style={[styles.row, styles.stats]}>
        <StatsCard title="Pairs matched" primaryValue={2} secondaryValue={8} />
        <StatsCard title="Total moves" primaryValue={9} />
      </View>
      <View style={styles.row}>
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </View>
      <View style={styles.row}>
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </View>
      <View style={styles.row}>
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </View>
      <View style={styles.row}>
        <GameCard selected />
        <GameCard />
        <GameCard />
        <GameCard />
      </View>
      <View style={[styles.row, styles.actions]}>
        <Button type="primary" onPress={() => alert("todo")}>
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
