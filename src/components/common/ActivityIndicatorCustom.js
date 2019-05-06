import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native'

const ActivityIndicatorCustom = () => {
  return (
    <View style = {styles.container}>
      <ActivityIndicator size = "large" color = "#0000ff"/>
    </View>
  )
}

export default ActivityIndicatorCustom

const styles = StyleSheet.create({
  container: {
    left:0,
    right:0,
    top:0,
    bottom:0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
})