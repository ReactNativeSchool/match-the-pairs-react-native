import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";

const AnimatedView = ({
  pressed,
  title,
}: {
  pressed: boolean;
  title: string;
}) => {
  const transform = useSharedValue(1);

  const btnStyle = [
    styles.button,
    { backgroundColor: pressed ? "#9ff9e1" : "#5cebdf" },
  ];

  React.useEffect(() => {
    transform.value = withTiming(pressed ? 1.1 : 1);
  }, [pressed]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: transform.value }],
    };
  });

  return (
    <Animated.View style={[...btnStyle, animatedStyles]}>
      <Text style={styles.text}>{title}</Text>
    </Animated.View>
  );
};

type Props = {
  title: string;
  onPress: () => void;
};

export const Button = ({ title, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => <AnimatedView pressed={pressed} title={title} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5cebdf",
    padding: 10,
    borderRadius: 3,
  },
  text: {
    fontSize: 16,
    color: "#054861",
    fontWeight: "500",
  },
});
