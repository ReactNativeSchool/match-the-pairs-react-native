import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Image,
} from "react-native";
import Animated, {
  withTiming,
  useAnimatedStyle,
  withDelay,
} from "react-native-reanimated";

import { Colors, Spacing, Theme } from "constants/index";
import CardBack from "images/card-back.png";

type GameCardProps = {
  selected?: boolean;
  index: number;
  emojis: string[];
  onPress: () => void;
  visible: boolean;
  disabled: boolean;
};

export const GameCard = ({
  index,
  emojis,
  selected,
  onPress,
  visible,
  disabled,
}: GameCardProps) => {
  const cardStyles: ViewStyle[] = [styles.card];
  const textStyles: TextStyle[] = [styles.text];

  if (selected) {
    cardStyles.push(styles.cardSelected);
  }

  if (disabled) {
    textStyles.push(styles.textDisabled);
  }

  // Back = the side of the card initially shown (with the ❓)
  const backStyles = useAnimatedStyle(() => {
    return {
      // if the card is becoming visible we want to immediately start the hide animation of the "back"
      // of the card. If we're showing the emoji, we want to wait for this animation to start so that
      // the emoji starts to fade away first, thus the delay
      opacity: withDelay(
        visible ? 0 : 250,
        withTiming(visible ? 0 : 1, {
          duration: 500,
        })
      ),
      transform: [
        {
          rotateY: withDelay(
            visible ? 0 : 250,
            withTiming(visible ? "90deg" : "0deg", { duration: 500 })
          ),
        },
      ],
    };
  });

  // Front = the side of the card that is shown when the card is clicked. The emoji side
  const frontStyles = useAnimatedStyle(() => {
    return {
      opacity: withDelay(
        visible ? 250 : 0,
        withTiming(visible ? 1 : 0, {
          duration: 500,
        })
      ),
      transform: [
        {
          rotateY: withDelay(
            visible ? 250 : 0,
            withTiming(visible ? "0deg" : "90deg", { duration: 500 })
          ),
        },
      ],
    };
  });

  return (
    <TouchableOpacity
      style={cardStyles}
      onPress={onPress}
      activeOpacity={0.75}
      disabled={disabled}
    >
      <Animated.View style={backStyles}>
        <Image source={CardBack} style={styles.image} resizeMode="contain" />
      </Animated.View>
      <Animated.Text style={[textStyles, frontStyles]}>
        {emojis[index]}
      </Animated.Text>
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
    borderWidth: 2,
    borderColor: Colors.greyMedium,
  },
  cardSelected: {
    borderColor: Colors.tealLight,
  },
  text: {
    fontSize: 35,
    position: "absolute",
  },
  textDisabled: {
    opacity: 0.7,
  },
  image: {
    width: 50,
    height: 50,
    tintColor: Colors.greyDark,
  },
});
