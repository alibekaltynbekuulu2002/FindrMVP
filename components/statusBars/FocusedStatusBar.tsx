import { View, Text, StatusBar } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/native";
import { COLORS } from "../../constants/theme";

const FocusedStatusBar = () => {
  const isFocused = useIsFocused();
  return isFocused ? (
    <StatusBar
      animated={true}
      backgroundColor={COLORS.dark}
      barStyle={"light-content"}
    />
  ) : null;
};

export default FocusedStatusBar;
