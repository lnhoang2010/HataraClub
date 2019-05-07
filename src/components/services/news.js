import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BaseView from './../common/BaseView';
import styles from './styles';

export default class News extends BaseView {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={[styles.container, { height: 50, width: '100%', borderWidth: 1, borderColor: 'grey' }]}>
                <Text style={{ alignSelf: 'center', fontSize: 15, textAlign: "center" }}>
                    {this.props.news.title}
                </Text>
            </View>
        )
    }
}