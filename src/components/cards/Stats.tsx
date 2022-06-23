import React from "react";
import { View, StyleSheet, Text, ViewStyle } from "react-native";

import { Colors, Spacing, Theme } from "src/constants";

type StatsCardProps = {
  title: string;
  primaryValue: number;
  secondaryValue?: number;
};

export const StatsCard = (props: StatsCardProps) => {
  const { secondaryValue, primaryValue } = props;
  const showProgressBar = secondaryValue !== undefined;

  const [cardWidth, setCardWidth] = React.useState(0);

  const progressBarContainerStyles: ViewStyle[] = [styles.progressBarContainer];
  let progressBarWidth = 0;

  if (showProgressBar) {
    progressBarContainerStyles.push({ backgroundColor: Colors.greyMedium });
    progressBarWidth = (primaryValue / secondaryValue) * cardWidth;
  }

  const progressBarStyles: ViewStyle[] = [
    styles.progressBar,
    { width: progressBarWidth },
  ];

  if (primaryValue === secondaryValue) {
    progressBarStyles.push({ borderBottomRightRadius: 0 });
  }

  return (
    <View
      style={styles.container}
      onLayout={(e) => setCardWidth(e.nativeEvent.layout.width)}
    >
      <View style={progressBarContainerStyles}>
        <View style={progressBarStyles} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.primaryValue}>
          {primaryValue}
          {secondaryValue && (
            <Text style={styles.secondaryValue}>{`/${secondaryValue}`}</Text>
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
  primaryValue: {
    color: Colors.greyDarkest,
    fontSize: 20,
    fontWeight: "600",
  },
  secondaryValue: {
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
