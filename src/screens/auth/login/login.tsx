import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import {BackgroundAuth} from '../../../assets/images';
import AuthScroll from '../../../animations/auth-scroll';

export interface ILoginScreenProps {}

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <AuthScroll>
          <ImageBackground
            resizeMode="cover"
            source={BackgroundAuth}
            style={{flex: 1}}
          />
        </AuthScroll>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
