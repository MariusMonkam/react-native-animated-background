import React from "react";
import { useAnimation } from "../hooks/useAnimation";
import { StyleSheet, Animated, View } from "react-native";
const RNAnimatedShapeBgColor = (props) => {
  const shapeBgAnim = useAnimation();

  const {
    firstColor,
    secondColor,
    opacity,
    width,
    height,
    elevation,
    borderRadius,
    bgColor,
  } = props;

  const shapeBoxBgAnim = shapeBgAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [firstColor, secondColor],
  });

  const animatedShapeBoxBgStyle = {
    backgroundColor: shapeBoxBgAnim,
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Animated.View
        style={[
          styles.box,
          {
            ...animatedShapeBoxBgStyle,
            opacity,
            width,
            height,
            elevation,
            borderRadius,
          },
        ]}
      >
        {props.children}
      </Animated.View>
    </View>
  );
};

export default RNAnimatedShapeBgColor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
