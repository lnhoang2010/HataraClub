import {StackActions, NavigationActions} from 'react-navigation';

const PushStackActions = (navigation, routeName = "", params = {}) => {
  if(!routeName){
    return;
  }
  const push = StackActions.push({
    routeName,
    params
  });
  navigation.dispatch(push);
}

// navigationNavigateActions is an array 
// [
//   {
//     routeName: string;
//     params?: NavigationParams;
//     action?: NavigationNavigateAction;
//     key?: string;
//   }
// ]

const ResetStackActions = (navigation, index = 0, navigationNavigateActions = [{routeName:'', params:undefined}]) =>{
  if(navigationNavigateActions === [] ){
    return;
  }
  
  let arrayNavigationActions = [];

  navigationNavigateActions.forEach(element => {
    arrayNavigationActions.push(NavigationActions.navigate({...element}));
  });

  if(navigationNavigateActions.length !==  arrayNavigationActions.length){
    return;
  }
  const resetAction = StackActions.reset({
    index,
    actions: arrayNavigationActions
  })
  navigation.dispatch(resetAction);
}

export default {
  PushStackActions,
  ResetStackActions,
}