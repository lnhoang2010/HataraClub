import HttpHelper from '../helpers/HttpHelper';
import APIconfig, {ApiLink} from '../helpers/APIconfig';
import Store from './../store';
import {AsyncStorage} from 'react-native'
import NavigationAction from './../helpers/NavigatorHelper';
import Actions from '../actions'

let subscribeChangeNewsStore

const delay = ms => new Promise((resolve) => setTimeout(resolve, ms));
class News {
  static loadData = async (url) =>{
    // return await delay(1000).then(()=>({a:1,b:2}))
    return await HttpHelper.get(url);
  }

  static listenChangeScreen = (navigation) => {
    function selectData(state) {
      return state.news.newsData;
    }

    let currentValue

    function handleChangeNews() {
      let previousValue = currentValue
      currentValue = selectData(Store.getState())
      if (previousValue !== currentValue) {
        // NavigationAction.ResetStackActions(navigation, 0, [{routeName:"Profile"}])
        AsyncStorage.setItem('newsData', JSON.stringify(currentValue))
      }
    }
    
    subscribeChangeNewsStore = Store.subscribe(handleChangeNews);
  }

  static unlistenChangeScreen = () => {
    subscribeChangeNewsStore()
  }

}

export default News
