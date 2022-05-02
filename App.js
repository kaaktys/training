import React, { useState } from "react";
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/screens/Home";
import Photos from "./src/screens/Photos";

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Photos">
        <Stack.Screen name="Home" component={Home}   />
        <Stack.Screen name="Photos" component={Photos} />
      </Stack.Navigator>

    </NavigationContainer>

  )
}

export default App;
