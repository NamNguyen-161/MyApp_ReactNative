import {Dimensions, StyleSheet} from 'react-native';
import React, {PropsWithChildren, useCallback} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const MAX_TRANSLATE_Y = (9.5 / 10) * SCREEN_HEIGHT;
const MIN_TRANSLATE_Y = (1 / 5) * SCREEN_HEIGHT;

type AuthScrollProps = PropsWithChildren<unknown>;

enum EScrollStatus {
  TOP_TO_BOTTOM = 'TOP_TO_BOTTOM',
  BOTTOM_TO_TOP = 'BOTTOM_TO_TOP',
}

const AuthScroll = (props: AuthScrollProps) => {
  const {children} = props;
  const translateY = useSharedValue<number>(MIN_TRANSLATE_Y);
  const statusScroll = useSharedValue<EScrollStatus>(
    EScrollStatus.TOP_TO_BOTTOM,
  );

  const scrollTo = useCallback((destination: number) => {
    'worklet';
    translateY.value = withSpring(destination, {damping: 50});
  }, []);

  const context = useSharedValue({y: 0});
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(event => {
      translateY.value = event.translationY + context.value.y;
      if (translateY.value >= MAX_TRANSLATE_Y) {
        translateY.value = MAX_TRANSLATE_Y;
      } else if (translateY.value <= MIN_TRANSLATE_Y) {
        translateY.value = MIN_TRANSLATE_Y;
      }
    })
    .onEnd(() => {
      if (statusScroll.value === EScrollStatus.TOP_TO_BOTTOM) {
        if (translateY.value >= MAX_TRANSLATE_Y / 2) {
          scrollTo(MAX_TRANSLATE_Y);
          statusScroll.value = EScrollStatus.BOTTOM_TO_TOP;
        } else {
          scrollTo(MIN_TRANSLATE_Y);
        }
      } else {
        if (translateY.value <= (3 * MAX_TRANSLATE_Y) / 4) {
          scrollTo(MIN_TRANSLATE_Y);
          statusScroll.value = EScrollStatus.TOP_TO_BOTTOM;
        } else {
          scrollTo(MAX_TRANSLATE_Y);
        }
      }
    });

  const rTopSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP,
    );

    return {
      borderRadius,
      transform: [{translateY: translateY.value}],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.topSheetContainer, rTopSheetStyle]}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  topSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    position: 'absolute',
    bottom: SCREEN_HEIGHT,
    borderRadius: 25,
    zIndex: 1,
  },
});

export default AuthScroll;
