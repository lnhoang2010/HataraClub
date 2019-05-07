import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import BaseView from './../common/BaseView';
import styles from './styles';
import { connect } from 'react-redux';
import Actions from '../../actions';
import ChangePasswordForm from './changePassword'

class Profile extends BaseView {
  constructor(props) {
    super(props)
    this.state = {password: "", confirmPassword: "", changePassword: false}
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('username', 'Profile'),
    }
  };

  onDeleteClicked = () => {
    Alert.alert(
      'Delete user',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => { },
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => {
            var username = this.props.navigation.getParam('username');
            this.props.dispatch(Actions.delete(username))
            this.props.navigation.navigate('Main')
          }
        }
      ]
    )
  }

  onSaveClicked = () => {
    if(this.state.password == this.state.confirmPassword){
      var username = this.props.navigation.getParam('username');

      this.setState({changePassword: false})
      this.props.dispatch(Actions.changePassword(username, this.state.password))

    } else {
      alert('Please enter the same password')
    }
  }

  onChangePasswordClicked = () => {
    this.setState({changePassword: true})
  }

  onChangePassword = (text) => {
    this.setState({password: text})
  }
  
  onChangeConfirmPassword = (text) => {
    this.setState({confirmPassword: text})
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>{this.props.username}</Text>  */}

        {!this.state.changePassword && <View style={{ flexDirection: "row", height: 50, width: '100%', paddingTop: 50, alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ left: 50 }}>
            Change password
          </Text>

          <TouchableOpacity style={{ height: 30, width: 30, right: 50 }} onPress={() => this.onChangePasswordClicked()}>
            <Image
              style={{ flex: 1 }}
              source={{ uri: 'https://cdn3.iconfinder.com/data/icons/crime-and-security-3-2/48/147-512.png' }}
            />
          </TouchableOpacity>
        </View>}

        {!this.state.changePassword && <View style={{ flexDirection: "row", height: 50, width: '100%', paddingTop: 50, alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ left: 50 }}>
            Delete user
          </Text>

          <TouchableOpacity style={{ height: 30, width: 30, right: 50 }} onPress={() => this.onDeleteClicked()}>
            <Image
              style={{ flex: 1 }}
              source={{ uri: 'https://cdn1.iconfinder.com/data/icons/round-ui/123/47-512.png' }}
            />
          </TouchableOpacity>
        </View>}

        {!this.state.changePassword && <TouchableOpacity
          style={styles.touchable}
          onPress={() => this.reset({ navigationNavigateActions: [{ routeName: "Main" }] })}
        >
          <Text>Logout</Text>
        </TouchableOpacity>}

        {this.state.changePassword && <ChangePasswordForm
          onChangePassword = {(text) => this.onChangePassword(text)}
          onChangeConfirmPassword = {(text) => this.onChangeConfirmPassword(text)}
          onSaveClicked = {() => this.onSaveClicked()}
        />}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  userData: state.user.userData
})

export default connect(mapStateToProps)(Profile);