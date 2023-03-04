import { View, Text, StatusBar } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/native";

const FocusedStatusBar = () => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} /> : null;
};

export default FocusedStatusBar;
