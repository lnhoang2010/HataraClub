import {StyleSheet, Platform} from 'react-native';

export const viewTextInput =  StyleSheet.create({
    container: {
      paddingLeft:10,
      height:50,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderBottomWidth:2,
      borderBottomColor: 'rgba(0,0,0,0.5)',
    },
    textInput: Platform.OS === 'ios' ? {
      flex:1,
      marginLeft:10,
      fontSize:18, 
      fontWeight:"900",
      fontFamily: "Montserrat-Medium"
    }:{
      flex:1,
      paddingBottom: 8,
      paddingTop: 5,
      marginLeft:10,
      fontSize:18, 
      fontWeight:"900",
      fontFamily: "Montserrat-Medium"
    },
});

export const buttonLogin = StyleSheet.create({
  container: {
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center"
  },
  text:{
    fontSize:18, 
    fontFamily: "Montserrat-Bold"
  }
});

export const viewLogin = StyleSheet.create({
  container: {
    flex:1, 
    zIndex:1
  },
  body:{
    justifyContent:"center", 
    flex:1,
  },
  textInputUserName:{

  },
  textInputPassword:{
    marginTop: 10
  },
  buttonLogin:{
    marginTop: 10
  }
});

