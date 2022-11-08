import * as React from 'react';
import HomeScreen from '../screens/home/home';
import SearchScreen from '../screens/search/search';
import {StackParams} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesome5, FontAwesome} from '@expo/vector-icons';
import {StyleSheet} from 'react-native';
import PersonalScreen from '../screens/personal/personal';
import NotificationScreen from '../screens/notification/notification';
import BottomTab from '../components/custom-bottom-tab';

const Tab = createBottomTabNavigator<StackParams>();

export interface IBottomNavigationProps {}

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="HOME"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.navigator,
        headerShown: false,
      }}>
      <Tab.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTab focused={focused} text="Home">
              <FontAwesome5
                name="home"
                size={20}
                style={[styles.icon, focused && styles.iconFocus]}
                color={focused ? '#19A54A' : 'gray'}
              />
            </BottomTab>
          ),
        }}
      />
      <Tab.Screen
        name="SEARCH"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTab focused={focused} text="Search">
              <FontAwesome5
                name="search"
                size={20}
                style={[styles.icon, focused && styles.iconFocus]}
                color={focused ? '#19A54A' : 'gray'}
              />
            </BottomTab>
          ),
        }}
      />
      <Tab.Screen
        name="NOTIFICATIONS"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTab focused={focused} text="Notifications">
              {focused ? (
                <FontAwesome
                  name="bell"
                  size={20}
                  style={[styles.icon, focused && styles.iconFocus]}
                  color="#19A54A"
                />
              ) : (
                <FontAwesome5
                  name="bell"
                  size={20}
                  style={[styles.icon, focused && styles.iconFocus]}
                  color="gray"
                />
              )}
            </BottomTab>
          ),
        }}
      />
      <Tab.Screen
        name="MENU"
        component={PersonalScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTab focused={focused} text="Menu">
              <FontAwesome
                name="navicon"
                size={20}
                style={[styles.icon, focused && styles.iconFocus]}
                color={focused ? '#19A54A' : 'gray'}
              />
            </BottomTab>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  navigator: {
    height: 80,
  },
  icon: {
    paddingTop: 12,
  },
  iconFocus: {
    paddingTop: 10,
  },
});
