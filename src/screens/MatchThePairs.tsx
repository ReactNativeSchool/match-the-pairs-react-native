import { SafeAreaView, StyleSheet, View } from "react-native";

import { StatsCard, GameCard } from "components/cards";
import { Spacing } from "constants/index";

const MatchThePairs = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
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
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    marginHorizontal: Spacing.cardMargin,
  },
});

export default MatchThePairs;
