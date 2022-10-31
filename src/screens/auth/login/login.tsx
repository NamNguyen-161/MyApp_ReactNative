import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {
  Input,
  FormControl,
  WarningOutlineIcon,
  Box,
  Center,
  Pressable,
  Icon,
  Button,
} from 'native-base';
import {MaterialIcons} from '@expo/vector-icons';
import {Controller, useForm} from 'react-hook-form';

export interface ILoginScreenProps {}

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

export default function LoginScreen() {
  const formMethod = useForm();
  const {handleSubmit, control, getValues} = formMethod;
  const [show, setShow] = useState<boolean>(false);

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Center flex={1}>
      <Box alignItems="center" style={styles.container}>
        <Controller
          name="email"
          control={control}
          render={({field, fieldState}) => (
            <FormControl w="75%" py={2}>
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

        <Controller
          name="password"
          control={control}
          render={({field, fieldState}) => (
            <FormControl w="75%" py={2}>
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
        <Button
          // isLoading
          // isLoadingText="Submitting"
          spinnerPlacement="end"
          onPress={handleSubmit(onSubmit)}>
          Button
        </Button>
      </Box>
    </Center>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
