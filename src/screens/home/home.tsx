import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import useNavigation from '../../hooks/useNavigation';

export interface IHomeScreenProps {}

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.center}>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('NOTIFICATIONS')}
        title="Navigate"
      />
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
