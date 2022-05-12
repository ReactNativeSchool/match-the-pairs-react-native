import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export const Button = ({ title, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? "#9ff9e1" : "#5cebdf" },
      ]}
    >
      <Text style={styles.text}>{title}</Text>
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
