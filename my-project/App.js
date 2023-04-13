import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import Home  from "./src/pages/index"

import { LinearGradient } from "expo-linear-gradient"

const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
}

export default function App() {
  return (
    <NativeBaseProvider config={config}>
     <Home/>
    </NativeBaseProvider>
  );
}