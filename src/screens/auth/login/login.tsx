import * as React from 'react';
import {Button, Text} from 'react-native';
import useNavigation from '../../../hooks/useNavigation';

export interface ILoginScreenProps {}

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <>
      <Text>LoginScreen</Text>
      <Button
        title="Go to home"
        onPress={() =>
          navigation.navigate('MAIN', {
            screen: 'HOME',
            params: {name: 'Nguyen Van Nam'},
          })
        }
      />
      <Button
        title="REGISTER"
        onPress={() =>
          navigation.navigate('REGISTER', {
            params: {name: 'REGISTER'},
          })
        }
      />
    </>
  );
}
