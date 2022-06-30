import React from "react";
import { View, StyleSheet, Text, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

import { Colors, Spacing, Theme } from "src/constants";

type StatsCardProps = {
  title: string;
  numerator: number;
  denominator?: number;
};

export const StatsCard = (props: StatsCardProps) => {
  const { numerator, denominator } = props;
  const showProgressBar = denominator !== undefined;

  const [cardWidth, setCardWidth] = React.useState(0);

  const progressBarContainerStyles: ViewStyle[] = [styles.progressBarContainer];

  if (showProgressBar) {
    progressBarContainerStyles.push({ backgroundColor: Colors.greyMedium });
  }

  const progressBarWidthAnimated = useAnimatedStyle(() => {
    if (!showProgressBar) {
      return {
        width: 0,
      };
    }

    // We clamp at 0 and the last number so that the bar doesn't extend outside of
    // the card. If we jump from 8 to 0 (reseting a game) the bar glitches and
    // empties, refills, and empties again. Clamping fixes that.
    const useClamping = numerator === 0 || numerator >= denominator;
    return {
      width: withSpring((numerator / denominator) * cardWidth, {
        overshootClamping: useClamping,
        stiffness: 75,
      }),
    };
  }, [numerator, denominator, cardWidth]);

  const progressBarStyles: ViewStyle[] = [
    styles.progressBar,
    progressBarWidthAnimated,
  ];

  if (numerator === denominator) {
    progressBarStyles.push({ borderBottomRightRadius: 0 });
  }

  return (
    <View
      style={styles.container}
      onLayout={(e) => setCardWidth(e.nativeEvent.layout.width)}
    >
      <View style={progressBarContainerStyles}>
        <Animated.View style={progressBarStyles} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.numerator}>
          {numerator}
          {denominator && (
            <Text style={styles.denominator}>{`/${denominator}`}</Text>
          )}
        </Text>
      </View>
    </View>
  );
};

const borderRadius = Theme.radius;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.greyLight,
    margin: Spacing.sm,
    borderRadius,
  },
  content: {
    padding: Spacing.sm,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    color: Colors.greyDarkest,
    marginBottom: Spacing.xs,
  },
  numerator: {
    color: Colors.greyDarkest,
    fontSize: 20,
    fontWeight: "600",
  },
  denominator: {
    color: Colors.greyDark,
    fontSize: 14,
    fontWeight: "500",
  },
  progressBarContainer: {
    backgroundColor: "transparent",
    height: 8,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    marginBottom: Spacing.xs,
  },
  progressBar: {
    height: 8,
    width: 0,
    backgroundColor: Colors.blueMedium,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },
});
