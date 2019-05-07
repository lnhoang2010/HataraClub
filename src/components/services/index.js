import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BaseView from './../common/BaseView';
import styles from './styles';

export default class Services extends BaseView{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style = {styles.container}>
        {/* <TouchableOpacity 
          onPress = {()=> this.goTo("Profile")}
          style = {styles.touchable}
        >
          <Text>Profile</Text>
        </TouchableOpacity> */}
      </View>
    )
  }
}