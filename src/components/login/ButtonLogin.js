import React from 'react';
import {View, ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {buttonLogin} from './styles';

export default (props) => {
  return <TouchableOpacity
    onPress={() => props.onPress && props.onPress()}
  >
    <View
      style={[buttonLogin.container, props.style]}
    >
      <Text style = {buttonLogin.text}>
        {"Sign in".toUpperCase()}
      </Text>
    </View>
  </TouchableOpacity>
}