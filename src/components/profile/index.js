import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import BaseView from './../common/BaseView';
import styles from './styles';
import { connect } from 'react-redux';
import Actions from '../../actions';

class Profile extends BaseView {
  constructor(props) {
    super(props)
    // this.state = {username: this.props.navigation.getParam('username')}
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
                    // alert(username);
                    this.props.dispatch(Actions.delete(username))
                    this.props.navigation.navigate('Main')
                }
            }
        ]
    )
}
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>{this.props.username}</Text>  */}
          <Text style= {{paddingTop: 50}}>
            Delete user
          </Text>

          <TouchableOpacity style={{ paddingTop: 20, height: 100, width: 100 }} onPress= {() => this.onDeleteClicked()}>
            <Image
              style = {{flex: 1}}
              source={{ uri: 'https://cdn1.iconfinder.com/data/icons/round-ui/123/47-512.png' }}
            />
          </TouchableOpacity>

        <TouchableOpacity
          style={styles.touchable}
          onPress={() => this.reset({ navigationNavigateActions: [{ routeName: "Main" }] })}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  // profile: state.user.profile
})

export default connect(mapStateToProps)(Profile);