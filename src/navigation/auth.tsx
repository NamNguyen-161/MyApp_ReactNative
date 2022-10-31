import * as React from 'react';
import {StackParams} from './types';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/auth/login/login';
import RegisterScreen from '../screens/auth/register/register';
import AuthLayout from '../layouts/auth-layout';

const Stack = createStackNavigator<StackParams>();

export default function AuthNavigation() {
  return (
    <AuthLayout>
      <Stack.Navigator
        initialRouteName="LOGIN"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LOGIN" component={LoginScreen} />
        <Stack.Screen name="REGISTER" component={RegisterScreen} />
      </Stack.Navigator>
    </AuthLayout>
  );
}
