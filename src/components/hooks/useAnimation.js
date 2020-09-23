import { useState, useEffect } from "react";
import { Animated, Easing, View, Text } from "react-native";

export function useAnimation() {
  const [anim, setAnim] = useState(new Animated.Value(0));

  const handleAnimation = () => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(anim, {
        toValue: 0,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => handleAnimation());
    });
  };
  useEffect(() => {
    handleAnimation();
  });
  return anim;
}
