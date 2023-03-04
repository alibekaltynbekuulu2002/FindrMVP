import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import FocusedStatusBar from "../../components/statusBars/FocusedStatusBar";

const Login = () => {
  return (
    <SafeAreaView>
      <FocusedStatusBar />
      <Text>Login</Text>
    </SafeAreaView>
  );
};

export default Login;
