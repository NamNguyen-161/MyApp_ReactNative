import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface IBottomTabProps {
  focused: boolean;
  text: string;
}

export default function BottomTab(props: PropsWithChildren<IBottomTabProps>) {
  const {focused, text} = props;
  return (
    <View style={[styles.view, focused && styles.borderFocus]}>
      {props.children}
      <Text style={[styles.label, focused && styles.textFocus]}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 5,
  },
  label: {
    paddingTop: 5,
  },
  borderFocus: {
    borderTopColor: '#19A54A',
    borderTopWidth: 2,
  },
  textFocus: {
    color: '#19A54A',
  },
});
