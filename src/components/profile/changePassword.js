import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
// import BaseView from './../common/BaseView';
import styles from './styles';
import { connect } from 'react-redux';
import Actions from '../../actions';

export default class ChangePasswordForm extends Component {
    constructor(props) {
        super(props)
        // this.state = { newPassword: "", newPasswordAgain: "" }
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <Text>{this.props.username}</Text>  */}
                <TextInput
                    style={{ width: 200, height: 40, top: 20, borderWidth: 1, borderColor: 'grey' }}
                    placeholder="New password"
                    maxLength={20}
                    onChangeText={(text) => this.props.onChangePassword(text)}
                    secureTextEntry = {true}
                />

                <TextInput
                    style={{ width: 200, height: 40, top: 50, borderWidth: 1, borderColor: 'grey' }}
                    placeholder="Confirm password"
                    maxLength={20}
                    onChangeText={(text) => this.props.onChangeConfirmPassword(text)}
                    secureTextEntry = {true}
                />

                <TouchableOpacity
                    style={styles.touchable}
                    onPress={() =>  this.props.onSaveClicked()}>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
