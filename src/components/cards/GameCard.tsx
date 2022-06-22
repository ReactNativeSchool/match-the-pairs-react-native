import { View, StyleSheet, Text, ViewStyle } from "react-native";

import { Colors, Spacing, Theme } from "constants/index";

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
    backgroundColor: Colors.greyMedium,
    justifyContent: "center",
    alignItems: "center",
    margin: Spacing.sm,
    borderRadius: Theme.radius,
    paddingVertical: 35,
    borderWidth: 2,
    borderColor: Colors.greyMedium,
  },
  cardSelected: {
    borderColor: Colors.tealLight,
  },
  text: {
    fontSize: 35,
  },
});
