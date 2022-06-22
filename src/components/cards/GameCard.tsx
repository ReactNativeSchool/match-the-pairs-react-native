import { View, StyleSheet, Text, ViewStyle } from "react-native";

import { Colors, Spacing } from "constants/index";

type GameCardProps = {
  selected?: boolean;
};

export const GameCard = (props: GameCardProps) => {
  const cardStyles: ViewStyle[] = [styles.card];

  if (props.selected) {
    cardStyles.push(styles.cardSelected);
  }

  return (
    <View style={cardStyles}>
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
    borderWidth: 2,
    borderColor: Colors.cardBg,
  },
  cardSelected: {
    borderColor: Colors.primary,
  },
  text: {
    fontSize: 35,
  },
});
