import React from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  SafeAreaView
} from 'react-native';
import {connect} from 'react-redux'
import { userIcon, passIcon } from '../common/svg-icon';
import TextInputCustom from './TextInputCustom';
import ButtonCustom from './ButtonLogin';
import {viewLogin} from './styles';
import Actions from '../../actions';
import ModelUser from './../../models/User';
import BaseView from './../common/BaseView';

class Login extends BaseView {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      waiting: false
    }
    const {navigation} = this.props;
    ModelUser.listenChangeScreen(navigation);
  }

  onLogin = () =>{
    const {username, password} = this.state;
    const {navigation, dispatch} = this.props;
    this.setState({waiting: true});
    dispatch(Actions.login("1234",()=>{}, ()=>{}));
  }



  render() {
    var state = this.state;
    return (
      <SafeAreaView style = {viewLogin.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
          enabled
        >
        <KeyboardAvoidingView behavior="padding" style={viewLogin.body}>
          <View>
            <TextInputCustom
              nameIcon={"person-outline"}
              placeholder = "Username"
              onChangeText = {username => this.setState({username})}
              returnKeyType = "next"
              value = {state.username}
              refInput={input => (this.usernameInput = input)}
              onSubmitEditing={() => {
                this.passwordInput.focus();
              }}
            />
            <TextInputCustom
              placeholder = "Password"
              style={viewLogin.textInputPassword}
              nameIcon={"lock-outline"}
              secureTextEntry={true}
              autoCorrect={true}
              value = {state.password}
              onChangeText = {password => this.setState({password})}
              refInput={input => (this.passwordInput = input)}
              onSubmitEditing={this.onLogin}
              returnKeyType = "go"
            />
          </View>
          <ButtonCustom
            style = {viewLogin.buttonLogin}
            onPress = {this.onLogin}
          />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        {state.waiting&&this.renderActivityIndicator()}
      </SafeAreaView>
    );
  }
}

export default connect()(Login)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
