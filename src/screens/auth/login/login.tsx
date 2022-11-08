import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Input,
  FormControl,
  WarningOutlineIcon,
  Box,
  Pressable,
  Icon,
  Text,
} from 'native-base';
import {MaterialIcons} from '@expo/vector-icons';
import {Controller, useForm} from 'react-hook-form';
import useNavigation from '../../../hooks/useNavigation';
import AuthLayout from '../../../layouts/auth-layout';

export interface ILoginScreenProps {}

export default function LoginScreen() {
  const navigation = useNavigation();
  const formMethod = useForm();
  const {handleSubmit, control} = formMethod;
  const [show, setShow] = useState<boolean>(false);

  const onSubmit = (data: any) => {
    navigation.navigate('MAIN', {screen: 'HOME'});
    console.log(data);
  };
  return (
    <AuthLayout onSubmit={handleSubmit(onSubmit)}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.description}>Sign to your account</Text>
      <Box width="100%" pt="30px">
        <Controller
          name="email"
          control={control}
          render={({field, fieldState}) => (
            <FormControl py={2}>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                {...field}
                onChangeText={e => field.onChange(e)}
                height="12"
                type="text"
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      as={<MaterialIcons name="person" />}
                      size={5}
                      mr="2"
                      color="muted.400"
                    />
                  </Pressable>
                }
                placeholder="Email"
              />
              {fieldState.error && (
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  {fieldState.error.message}
                </FormControl.ErrorMessage>
              )}
            </FormControl>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({field, fieldState}) => (
            <FormControl py={2}>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                {...field}
                onChangeText={e => field.onChange(e)}
                height="12"
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      as={
                        <MaterialIcons
                          name={show ? 'visibility' : 'visibility-off'}
                        />
                      }
                      size={5}
                      mr="2"
                      color="muted.400"
                    />
                  </Pressable>
                }
                placeholder="Password"
              />
              {fieldState.error && (
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  {fieldState.error.message}
                </FormControl.ErrorMessage>
              )}
            </FormControl>
          )}
        />
      </Box>
      <Text style={styles.notAccount}>
        Don't have an account? &nbsp;
        <Text
          style={styles.signup}
          onPress={() => navigation.navigate('SIGNUP')}>
          Sign up
        </Text>
      </Text>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    width: '100%',
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
  },
  description: {
    paddingTop: 10,
    width: '100%',
    fontSize: 16,
    lineHeight: 19,
  },
  notAccount: {
    color: 'gray',
    paddingVertical: 10,
  },
  signup: {
    color: '#19A54A',
    fontWeight: '700',
  },
});
