import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

import { Colors, Spacing, Theme } from "constants/index";

type ButtonProps = {
  children: string;
  onPress: () => void;
  type?: "primary";
};

export const Button = ({ onPress, children, type }: ButtonProps) => {
  const buttonStyles: ViewStyle[] = [styles.button];
  const textStyles: TextStyle[] = [styles.text];

  if (type === "primary") {
    buttonStyles.push(styles.buttonPrimary);
    textStyles.push(styles.textPrimary);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: Spacing.md,
    paddingHorizontal: Spacing.xl,
    backgroundColor: Colors.greyMedium,
    margin: Spacing.sm,
    borderRadius: Theme.radiusSm,
  },
  buttonPrimary: {
    backgroundColor: Colors.tealLight,
  },
  text: {
    color: Colors.greyDarkest,
    fontWeight: "500",
    fontSize: 16,
  },
  textPrimary: {
    color: Colors.tealDark,
  },
});
