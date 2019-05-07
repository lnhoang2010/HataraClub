import HttpHelper from '../helpers/HttpHelper';
import APIconfig, {ApiLink} from '../helpers/APIconfig';
import Store from './../store';
import {AsyncStorage} from 'react-native'
import NavigationAction from './../helpers/NavigatorHelper';
import Actions from '../actions'

let subscribeChangeUserStore
const delay = ms => new Promise((resolve) => setTimeout(resolve, ms));
class User {
  static login = async (data) =>{
    // return await delay(1000).then(()=>({a:1,b:2}))
    // return await HttpHelper.post(ApiLink, {...APIconfig.login, ...data});
  }

  static validateUser = (username, userData) => {
    var varified = true;
    for(let i = 0; i < userData.length; i++){
      if(userData[i].username == username){
        varified = false
      }
    }
    return varified;
  }

  static validateLogIn = (username, password, userData) => {
    var varified = false;
    for(let i = 0; i < userData.length; i ++){
      if(userData[i].username == username && userData[i].password == password){
        varified = true;
      }
    }
    return varified;
  }

  static listenChangeScreen = (navigation) => {
    function selectData(state) {
      return state.user.userData;
    }
    let currentValue
    function handleChangeUser() {
      let previousValue = currentValue
      currentValue = selectData(Store.getState())
      if (previousValue !== currentValue) {
        // NavigationAction.ResetStackActions(navigation, 0, [{routeName:"Profile"}])
        AsyncStorage.setItem('userData', JSON.stringify(currentValue))
      }
    }
    
    subscribeChangeUserStore = Store.subscribe(handleChangeUser);
  }

  static loadData = async () => {
    try {
        const value = await AsyncStorage.getItem('userData');
        // alert(JSON.stringify(value))
        if (value !== null) {
          Store.dispatch(Actions.load(JSON.parse(value)))
        }
    } catch (error) {
        alert(error);
    }
}

  static unlistenChangeScreen = () => {
    subscribeChangeUserStore()
  }

}

export default User
