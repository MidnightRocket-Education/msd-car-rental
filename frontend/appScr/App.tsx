import React from 'react';
import { Component } from 'react';
import RootNatvigator from './RootNatvigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';


const App = () => {
    const Stack = createStackNavigator();

  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ title: 'Login' }} 
      />
    </Stack.Navigator>
  </NavigationContainer>

}
