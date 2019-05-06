import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  container:{
    backgroundColor:"#004986"
  },
  label: {
    fontWeight: '400',
  },
  tabbar: {
    backgroundColor: '#004986',
    justifyContent: 'space-between'
  },
  tab: {
    width: 120,
    flexDirection:'row',

  },
  indicator: {
    height:0,
  },
  tabBarLabel:{
    paddingLeft: 10,
    color: 'white',
  }
});