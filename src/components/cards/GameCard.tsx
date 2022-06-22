import { View, StyleSheet, Text } from "react-native";

import { Colors, Spacing } from "constants/index";

export const GameCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>🏄</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: Colors.cardBg,
    justifyContent: "center",
    alignItems: "center",
    margin: Spacing.cardMargin,
    borderRadius: Spacing.borderRadius,
    paddingVertical: 35,
  },
  text: {
    fontSize: 35,
  },
});
