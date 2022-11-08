import React, {PropsWithChildren} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import AuthScroll from '../animations/auth-scroll';
import {Image} from '../assets/images';

export default function AuthLayer(props: PropsWithChildren) {
  return (
    <>
      {props.children}
      <AuthScroll>
        <ImageBackground
          resizeMode="cover"
          source={Image.BackgroundAuth}
          style={{flex: 1}}
        />
        <View
          style={[
            styles.rectangle,
            {
              transform: [{translateX: -25}],
            },
          ]}
        />
      </AuthScroll>
    </>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    position: 'absolute',
    width: 50,
    height: 5,
    backgroundColor: '#fff',
    bottom: 15,
    left: '50%',
    borderRadius: 2.5,
  },
});
