import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../modules/home/presentation/HomeScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
