import {View, Text} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tables from './src/screens/Tables';
import TablePractice from './src/screens/TablePractice';
import Squares from './src/screens/Squares';
import Cubes from './src/screens/Cubes';
import Addition from './src/screens/Addition';
import Subtraction from './src/screens/Subtraction';
import Multiplication from './src/screens/Multiplication';
import Division from './src/screens/Division';
import PracticeTables from './src/screens/PracticeTables';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tables" component={PracticeTables} />
        <Stack.Screen name="Addition" component={Addition} />
        <Stack.Screen name="Subtraction" component={Subtraction} />
        <Stack.Screen name="Multiplication" component={Multiplication} />
        <Stack.Screen name="Division" component={Division} />
        <Stack.Screen name="Squares" component={Squares} />
        <Stack.Screen name="Cubes" component={Cubes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
