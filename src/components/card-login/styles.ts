import { theme } from "@/src/utils/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    paddingVertical: 50,
    paddingHorizontal: 24,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.gray_100,
    width: "100%",
    borderRadius: 8,
  },
  titleError: {
    fontSize: theme.fontSizes.md,
    fontFamily: theme.fonts.regular,
    color: theme.colors.red,
    marginBottom: 16,
    width: "100%",
    textAlign: "center",
  },
});
