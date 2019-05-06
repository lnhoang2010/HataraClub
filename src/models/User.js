import HttpHelper from '../helpers/HttpHelper';
import APIconfig, {ApiLink} from '../helpers/APIconfig';
import Store from './../store';
import NavigationAction from './../helpers/NavigatorHelper';
let subscribeChangeUserStore
const delay = ms => new Promise((resolve) => setTimeout(resolve, ms));
class User {
  static login = async (data) =>{
    return await delay(1000).then(()=>({a:1,b:2}))
    // return await HttpHelper.post(ApiLink, {...APIconfig.login, ...data});
  }

  static listenChangeScreen = (navigation) => {
    function selectData(state) {
      return state.user.profile;
    }
    
    let currentValue
    function handleChangeUser() {
      let previousValue = currentValue
      currentValue = selectData(Store.getState())
    
      if (previousValue !== currentValue && previousValue) {
        NavigationAction.ResetStackActions(navigation, 0, [{routeName:"Profile"}])
      }
    }
    
    subscribeChangeUserStore = Store.subscribe(handleChangeUser);
  }

  static unlistenChangeScreen = () => {
    subscribeChangeUserStore()
  }

}

export default User;