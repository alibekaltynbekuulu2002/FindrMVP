import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import FocusedStatusBar from "../../components/statusBars/FocusedStatusBar";

const Home = () => {
  return (
    <SafeAreaView>
      <FocusedStatusBar />
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
