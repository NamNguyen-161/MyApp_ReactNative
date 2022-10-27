import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import MainNavigator from './src/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NativeBaseProvider} from 'native-base';
import {StatusBar} from 'expo-status-bar';

const App = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar style="light" />
      <NativeBaseProvider>
        <NavigationContainer ref={navigationRef}>
          <MainNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
};

export default App;
