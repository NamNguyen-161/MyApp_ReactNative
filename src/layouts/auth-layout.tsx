import React, {PropsWithChildren} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Box, Center, Button} from 'native-base';
import {useRoute} from '@react-navigation/native';

export interface IAuthLayoutProps extends PropsWithChildren {
  onSubmit: () => void;
}

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const HEIGHT_EMPTY = (1 / 5) * SCREEN_HEIGHT;

export default function AuthLayout(props: IAuthLayoutProps) {
  const {onSubmit} = props;
  const route = useRoute();
  return (
    <Center flex={1}>
      <Box style={styles.emptySpace} />
      <Box style={styles.container}>{props.children}</Box>
      <Button
        _text={{style: styles.textBtn}}
        isLoadingText={route.name === 'SIGNIN' ? 'Login' : 'Register'}
        colorScheme="success"
        spinnerPlacement="end"
        onPress={onSubmit}
        style={styles.button}>
        {route.name === 'SIGNIN' ? 'Login' : 'Register'}
      </Button>
    </Center>
  );
}

const styles = StyleSheet.create({
  emptySpace: {
    width: '100%',
    height: HEIGHT_EMPTY,
  },
  container: {
    flex: 1,
    width: '100%',
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  button: {
    width: '100%',
    height: 60,
  },
  textBtn: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 24,
    textTransform: 'uppercase',
  },
});
