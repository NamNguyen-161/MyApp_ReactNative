import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackParams} from './types';
import LoginScreen from '../screens/auth/login/login';
import RegisterScreen from '../screens/auth/register/register';
import BottomNavigation from './bottom-navigation';

const Stack = createStackNavigator<StackParams>();

export interface ILoginNavigatorProps {}

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="LOGIN">
      <Stack.Screen
        name="MAIN"
        component={BottomNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LOGIN"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="REGISTER" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
