import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OwnerScreen from '../modules/owner/presentation/list/OwnerScreen';
import {OwnerDetailScreen} from '../modules/owner/presentation/detail/OwnerDetailScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Owner"
        component={OwnerScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="OwnerDetail"
        component={OwnerDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
