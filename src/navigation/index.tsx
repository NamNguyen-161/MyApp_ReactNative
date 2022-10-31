import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackParams} from './types';
import BottomNavigation from './bottom';
import AuthNavigation from './auth';

const Stack = createStackNavigator<StackParams>();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="AUTH">
      <Stack.Screen
        name="AUTH"
        component={AuthNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MAIN"
        component={BottomNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
