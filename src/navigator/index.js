import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Animated, Easing} from 'react-native';
import configScreen from './StackNav';

const screenInterpolator = sceneProps => {
  const { layout, position, scene } = sceneProps;
  const { index } = scene;
  const {routeName} = scene.route;
  const width = layout.initWidth;
  const height = layout.initHeight;
  
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0],
  });
  
  const translateY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [height, 0, 0],
  });

  const opacity = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [0, 1],
  });
  
  const scale = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [0, 1],
  });
  
  switch (routeName) {
    case "Main":
      return { opacity, transform: [{ translateX }]};
      // return { opacity, transform: [{ translateX }, { translateY }, { scale }]};
    default:
      return {opacity};
  }
}

const ApplicationRouter = createStackNavigator(
    configScreen,
  {
    // Default config for all screens
    initialRouteName: 'Main',
    headerMode:"screen",
    header: { visible: false },
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "blue",
        borderBottomWidth: 0,
        shadowColor: 'transparent',
      },
      headerTintColor: 'white',
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true
      },
      screenInterpolator: sceneProps=>screenInterpolator(sceneProps)
    })
  }
);

export default createAppContainer(ApplicationRouter);
