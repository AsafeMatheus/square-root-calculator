import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/Home'
import SquareRootScreen from './screens/Square'
import CubeRootScreen from './screens/Cube'
import GameScreen from './screens/Game'

const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Square"
          component={SquareRootScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cube"
          component={CubeRootScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}