import React, {Component} from 'react';
import {View, BackHandler} from 'react-native';
import ActivityIndicatorCustom from './ActivityIndicatorCustom';
import NavigatorHelper from "../../helpers/NavigatorHelper";

class BaseView extends Component {
  constructor(props) {
    super(props);
  }
  
  goTo = (routeName = "", params = {}) =>{
    NavigatorHelper.PushStackActions(this.props.navigation, routeName, params)
  }

  reset = ({index = 0, navigationNavigateActions = [{routeName:'', params:undefined}]}) => {
    const {navigation} = this.props;
    NavigatorHelper.ResetStackActions(navigation, index, navigationNavigateActions)
  }

  renderActivityIndicator = () =>{
    return <ActivityIndicatorCustom/>
  }
}

export default BaseView;