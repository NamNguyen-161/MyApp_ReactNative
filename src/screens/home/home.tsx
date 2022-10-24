import * as React from 'react';
import {Button, Text, View} from 'react-native';
import useNavigation from '../../hooks/useNavigation';
import useRoute from '../../hooks/useRoute';

export interface IHomeScreenProps {}

interface Params {
  name: string;
}

export default function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute<Params>();
  console.log('test username');
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={() => navigation.navigate('LOGIN')} title="Navigate" />
    </View>
  );
}
