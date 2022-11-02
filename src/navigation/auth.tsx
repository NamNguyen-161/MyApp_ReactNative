import * as React from 'react';
import {StackParams} from './types';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/auth/login/login';
import RegisterScreen from '../screens/auth/register/register';
import AuthLayer from '../layouts/auth-layer';

const Stack = createStackNavigator<StackParams>();

export default function AuthNavigation() {
  return (
    <AuthLayer>
      <Stack.Navigator
        initialRouteName="SIGNIN"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SIGNIN" component={LoginScreen} />
        <Stack.Screen name="SIGNUP" component={RegisterScreen} />
      </Stack.Navigator>
    </AuthLayer>
  );
}
