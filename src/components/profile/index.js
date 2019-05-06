import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BaseView from './../common/BaseView';
import styles from './styles';
import {connect} from 'react-redux';

class Profile extends BaseView{
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <View style = {styles.container}>
        <Text>{JSON.stringify(this.props.profile)}</Text> 
        <TouchableOpacity
          style = {styles.touchable}
          onPress = {()=>this.reset({navigationNavigateActions:[{routeName: "Main"}]})}
        >
          <Text>Logout</Text> 
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.user.profile
})

export default connect(mapStateToProps)(Profile);