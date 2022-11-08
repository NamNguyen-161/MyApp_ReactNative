import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface INotificationScreenProps {}

export default function NotificationScreen() {
  return (
    <View style={styles.center}>
      <Text>NotificationScreen</Text>
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
