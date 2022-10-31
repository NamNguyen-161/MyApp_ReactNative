import React, {PropsWithChildren} from 'react';
import {ImageBackground} from 'react-native';
import AuthScroll from '../animations/auth-scroll';
import {Image} from '../assets/images';

export default function AuthLayout(props: PropsWithChildren) {
  return (
    <>
      {props.children}
      <AuthScroll>
        <ImageBackground
          resizeMode="cover"
          source={Image.BackgroundAuth}
          style={{flex: 1}}
        />
      </AuthScroll>
    </>
  );
}
