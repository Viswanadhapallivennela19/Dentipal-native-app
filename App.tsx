import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./pages/landingpage"; 
// import HomePage from "./src/screens/HomePage"; 

export type RootStackParamList = {
  Landing: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} />
        {/* <Stack.Screen name="Home" component={HomePage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
