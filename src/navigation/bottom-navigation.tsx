import * as React from 'react';
import HomeScreen from '../screens/home/home';
import AboutScreen from '../screens/about/about';
import {StackParams} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<StackParams>();

export interface IBottomNavigationProps {}

export default function BottomNavigation() {
  return (
    <Tab.Navigator initialRouteName="HOME">
      <Tab.Screen name="HOME" component={HomeScreen} />
      <Tab.Screen name="ABOUT" component={AboutScreen} />
    </Tab.Navigator>
  );
}
