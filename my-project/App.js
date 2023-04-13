import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import Home  from "./src/pages/index"
import Profile from "./src/components/Profile";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { LinearGradient } from "expo-linear-gradient"

const Stack = createStackNavigator();

const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
}

export default function App() {
  return (
    <NativeBaseProvider config={config}>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>  
    </NativeBaseProvider>
  );
}