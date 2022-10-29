import React from 'react';
import { Button, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { CmnStyles } from '../style/styles';

interface IProps {}

const BoxWobble = ({}: IProps) => {
  const rotation = useSharedValue(0);
  const ANGLE = 20;
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value}deg` }],
  }));
  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <Animated.View style={[CmnStyles.box, animatedStyle]}>
        <Text style={{ color: 'white' }}>Wobble</Text>
      </Animated.View>

      <Button
        title="Wobble"
        onPress={() => {
          rotation.value = withRepeat(withTiming(ANGLE), 10, true);
        }}
      />
      <Button
        title="WobbleSequence"
        onPress={() => {
          rotation.value = withSequence(
            withTiming(-ANGLE, { duration: 1000 }),
            withRepeat(withTiming(ANGLE, { duration: 100 }), 6, true),
            withTiming(0, { duration: 1000 })
          );
        }}
      />
    </View>
  );
};

export default BoxWobble;
