import Profile from '../components/profile';
import Main from '../components/main';
export default {
  Main: {
    screen: Main,
    navigationOptions: {
      header: null
    }
  },
  Profile: {
    screen: Profile,
    // navigationOptions:{
    //   headerTitle: "Profile",
    // }
  },
}