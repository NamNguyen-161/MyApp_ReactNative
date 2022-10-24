import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import MainNavigator from './src/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <MainNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
