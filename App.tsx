import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";

export type StackParams = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<StackParams>();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

export default function App() {
  const [loaded] = useFonts({
    GolosBlack: require("./assets/fonts/GolosText-Black.ttf"),
    GolosBold: require("./assets/fonts/GolosText-Bold.ttf"),
    GolosExtraBold: require("./assets/fonts/GolosText-ExtraBold.ttf"),
    GolosMedium: require("./assets/fonts/GolosText-Medium.ttf"),
    GolosRegular: require("./assets/fonts/GolosText-Regular.ttf"),
    GolosSemiBold: require("./assets/fonts/GolosText-SemiBold.ttf"),
  });

  // ?returns null if fonts are not loaded.
  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false, animation: "none" }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
