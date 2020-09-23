import React from "react";
import { useAnimation } from "../hooks/useAnimation";
import {StyleSheet, Animated,View} from 'react-native'

const RNAnimatedBgColor = (props) => {
  const bgAnim = useAnimation();
  const {
    firstColor,
    secondColor,
    opacity,
    width,
    height,
    elevation,
    borderRadius,
    source,
  } = props;
  const boxBgAnim = bgAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [firstColor, secondColor],
  });

  const animatedStyle = {
    backgroundColor: boxBgAnim,
  };

  return (
    <Animated.View
      
      style={{
        ...animatedStyle,
        opacity,
        width,
        height,
        elevation,
        borderRadius,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default RNAnimatedBgColor;
