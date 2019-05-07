import React from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  SafeAreaView
} from 'react-native';
import { connect } from 'react-redux'
import { userIcon, passIcon } from '../common/svg-icon';
import TextInputCustom from './TextInputCustom';
import ButtonCustom from './ButtonLogin';
import { viewLogin } from './styles';
import Actions from '../../actions';
import ModelUser from './../../models/User';
import BaseView from './../common/BaseView';

class Login extends BaseView {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      waiting: false
    }
    const { navigation } = this.props;
    ModelUser.listenChangeScreen(navigation);
  }

  componentDidMount(){
    ModelUser.loadData();
  }

  onLogin = () => {
    const { username, password } = this.state;
    const { navigation, dispatch } = this.props;
    this.setState({ waiting: true });
    // dispatch(Actions.login(username, password, () => { }, () => { }));
  }

  onSignUp = () => {
    const { navigate } = this.props.navigation;

    if(this.state.password && this.state.username){
      if(ModelUser.validateUser(this.state.username, this.props.userData)){
        this.props.dispatch(Actions.signUp(this.state.username, this.state.password));
        navigate('Profile', { username: this.state.username})
      }
      else {
        alert("Username has been registered");
      }
    }
    else{
      alert("Password or username is invalid")
    }
  }

  render() {
    var state = this.state;
    return (
      <SafeAreaView style={viewLogin.container}>
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
                placeholder="Username"
                onChangeText={username => this.setState({ username })}
                returnKeyType="next"
                value={state.username}
                refInput={input => (this.usernameInput = input)}
                onSubmitEditing={() => {
                  this.passwordInput.focus();
                }}
              />
              <TextInputCustom
                placeholder="Password"
                style={viewLogin.textInputPassword}
                nameIcon={"lock-outline"}
                secureTextEntry={true}
                autoCorrect={true}
                value={state.password}
                onChangeText={password => this.setState({ password })}
                refInput={input => (this.passwordInput = input)}
                onSubmitEditing={this.onLogin}
                returnKeyType="go"
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', top: 20 }}>
              <ButtonCustom
                text='Sign in'
                style={{}}
                onPress={this.onLogin}
              />

              <ButtonCustom
                text='Sign up'
                style={{}}
                onPress={this.onSignUp}
              />
            </View>

          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        {state.waiting && this.renderActivityIndicator()}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.user.userData
});

export default connect(mapStateToProps)(Login)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
