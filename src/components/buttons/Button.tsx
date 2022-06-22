import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

import { Colors, Spacing } from "constants/index";

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
    padding: Spacing.buttonPadding,
    paddingHorizontal: Spacing.buttonPadding * 2,
    backgroundColor: Colors.cardBg,
    margin: Spacing.cardMargin,
    borderRadius: Spacing.borderRadius / 2,
  },
  buttonPrimary: {
    backgroundColor: Colors.primary,
  },
  text: {
    color: Colors.primaryText,
    fontWeight: "500",
    fontSize: 16,
  },
  textPrimary: {
    color: Colors.primaryText,
  },
});
