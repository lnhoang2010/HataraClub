import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
// import console = require('console');

class TabBarLabel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {label, color} = this.props;
      return <Text style={[styles.tabBarLabel,{color}]}>{label}</Text>
  }
}

export default TabBarLabel;