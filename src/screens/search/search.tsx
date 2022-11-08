import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface ISearchScreenProps {}

export default function SearchScreen() {
  return (
    <View style={styles.center}>
      <Text>SearchScreen</Text>
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
