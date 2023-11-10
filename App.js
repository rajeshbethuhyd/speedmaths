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
import SquareRoots from './src/screens/SquareRoots';
import CubeRoots from './src/screens/CubeRoots';
import Decimals from './src/screens/Decimals';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tables" component={PracticeTables} />
        <Stack.Screen
          name="Addition"
          component={Addition}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Subtraction"
          component={Subtraction}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Multiplication"
          component={Multiplication}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Division"
          component={Division}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Squares"
          component={Squares}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="SquareRoots"
          component={SquareRoots}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />

        <Stack.Screen
          name="Cubes"
          component={Cubes}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="CubesRoots"
          component={CubeRoots}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Decimals"
          component={Decimals}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
