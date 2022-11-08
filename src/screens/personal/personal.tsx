import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface IPersonalScreenProps {}

export default function PersonalScreen() {
  return (
    <View style={styles.center}>
      <Text>PersonalScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
