import React from "react";
import { View, StyleSheet, Text, ViewStyle } from "react-native";

import { Colors, Spacing } from "src/constants";

type StatsCardProps = {
  title: string;
  primaryValue: number;
  secondaryValue?: number;
};

export const StatsCard = (props: StatsCardProps) => {
  const { secondaryValue, primaryValue } = props;
  const showProgressBar = secondaryValue !== undefined;

  const [cardWidth, setCardWidth] = React.useState(0);

  const progressBarStyles: ViewStyle[] = [styles.progressBarContainer];
  let progressBarWidth = 0;

  if (showProgressBar) {
    progressBarStyles.push({ backgroundColor: Colors.cardBg });
    progressBarWidth = (primaryValue / secondaryValue) * cardWidth;
    console.log(progressBarWidth, cardWidth);
  }

  return (
    <View
      style={styles.container}
      onLayout={(e) => setCardWidth(e.nativeEvent.layout.width)}
    >
      <View style={progressBarStyles}>
        <View style={[styles.progressBar, { width: progressBarWidth }]} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.statsBg,
    margin: Spacing.cardMargin,
    borderRadius: Spacing.borderRadius,
  },
  content: {
    padding: Spacing.cardMargin,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    color: Colors.primaryText,
    marginBottom: 3,
  },
  primaryValue: {
    color: Colors.primaryText,
    fontSize: 20,
    fontWeight: "600",
  },
  secondaryValue: {
    color: Colors.secondaryText,
    fontSize: 14,
    fontWeight: "500",
  },
  progressBarContainer: {
    backgroundColor: "transparent",
    height: 8,
    borderTopLeftRadius: Spacing.borderRadius,
    borderTopRightRadius: Spacing.borderRadius,
    marginBottom: 3,
  },
  progressBar: {
    height: 8,
    width: 0,
    backgroundColor: Colors.progressBar,
    borderTopLeftRadius: Spacing.borderRadius,
    borderTopRightRadius: Spacing.borderRadius,
    borderBottomRightRadius: Spacing.borderRadius,
  },
});
