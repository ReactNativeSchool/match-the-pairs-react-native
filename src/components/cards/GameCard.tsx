import {
  View,
  StyleSheet,
  Text,
  ViewStyle,
  TouchableOpacity,
} from "react-native";

import { Colors, Spacing, Theme } from "constants/index";

import { Emoji } from "hooks/useMatchGame";

type GameCardProps = {
  selected?: boolean;
  index: number;
  emojis: Emoji[];
  onPress: () => void;
  visible: boolean;
};

export const GameCard = ({
  index,
  emojis,
  selected,
  onPress,
  visible,
}: GameCardProps) => {
  const cardStyles: ViewStyle[] = [styles.card];

  if (selected) {
    cardStyles.push(styles.cardSelected);
  }

  const emoji = emojis[index];

  return (
    <TouchableOpacity style={cardStyles} onPress={onPress} activeOpacity={0.75}>
      <Text style={styles.text}>{visible ? emoji?.emoji : "❓"}</Text>
    </TouchableOpacity>
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
