/* @flow */

import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import {
  TabView,
  TabBar,
  SceneMap,
} from 'react-native-tab-view';
import TabBarLabel from './TabBarLabel';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './../login';
import Contact from './../contact';
import Services from './../services';
export default class ScrollableTabBarExample extends Component {

  state = {
    index: 0,
    routes: [
      { key: 'services', title: "サービス", icon: "home" },
      { key: 'contact', title: 'お問合せ', icon: "envelope" },
      { key: 'login', title: 'プロフィール', icon: "user-circle" },
    ],
  };

  _handleIndexChange = index =>
    this.setState({
      index,
    });

  _renderTabBar = props => (
    <SafeAreaView style={styles.container}>
      <TabBar
        {...props}
        scrollEnabled
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
        inactiveColor={'rgba(0,0,0,1.0)'}
        activeColor={'rgba(255,255,255,1.0)'}
        labelStyle={styles.label}
        renderIcon={({ route }) => (<Icon name={route.icon} size={24} color="white" />)}
        renderLabel={({ route, color }) => (<TabBarLabel color={color} label={route.title} />)}
      />
    </SafeAreaView>
  );

  _renderScene = SceneMap({
    services:()=> <Services {...this.props}/>,
    contact:()=> <Contact {...this.props}/>,
    login:()=> <Login {...this.props}/>,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}
