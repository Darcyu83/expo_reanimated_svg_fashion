import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { WINDOW_WIDTH } from '../style/constants';
import { CmnStyles } from '../style/styles';

function Box() {
  const offset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offset.value * WINDOW_WIDTH,
        },
      ],
    };
  });

  return (
    <View style={{ width: '100%' }}>
      <Animated.View style={[CmnStyles.box, animatedStyle]}>
        <Text style={{ color: 'white' }}>Time/Spring</Text>
      </Animated.View>
      <Button
        title="TranslateX"
        onPress={() => {
          const diff = Math.random();
          offset.value = diff;
        }}
      />

      <Button
        title="Spring"
        onPress={() => {
          offset.value = withSpring(
            Math.random(),
            { damping: 8 },
            (finished) => {
              if (finished) {
                console.log('ANIMATION ENDED');
              } else {
                console.log('ANIMATION GOT CANCELLED');
              }
            }
          );
        }}
      />
      <Button
        title="Customized Spring"
        onPress={() => {
          offset.value = withSpring(
            Math.random(),
            { damping: 30, stiffness: 90 },
            (finished) => {
              if (finished) {
                console.log('ANIMATION ENDED');
              } else {
                console.log('ANIMATION GOT CANCELLED');
              }
            }
          );
        }}
      />
      <Button
        title="Timing"
        onPress={() => {
          offset.value = withTiming(
            0,
            { duration: 600, easing: Easing.out(Easing.exp) },
            (finished) => {
              if (finished) {
                console.log('ANIMATION ENDED');
              } else {
                console.log('ANIMATION GOT CANCELLED');
              }
            }
          );
        }}
      />
    </View>
  );
}

export default Box;
