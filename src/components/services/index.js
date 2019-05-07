import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import BaseView from './../common/BaseView';
import styles from './styles';
import News from './news';
import { connect } from 'react-redux';
import Actions from '../../actions';

class Services extends BaseView {
  constructor(props) {
    super(props)
  }

  onLoadNewsClicked = () => {
    this.props.dispatch(Actions.loadNews())
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.news}
          renderItem={({ item }) => <News
            news = {item}
          />}
        />

        <TouchableOpacity
          onPress={() => this.onLoadNewsClicked()}
          style={styles.touchable}
        >
          <Text>Load news</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news.newsData
})

export default connect(mapStateToProps)(Services);