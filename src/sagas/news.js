import Actions from '../actions';
import ActionTypes from '../actions/ActionTypes';
import {call, put, takeEvery, fork} from 'redux-saga/effects';
import News from '../models/News';

function* loadData(){
    var url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=801ae50ae7c5473b88015867f3d3c77d'
    
    try {
        const response = yield call(News.loadData, url);
        if(response){
          // yield put(Actions.setCurrentUser(response.data[0]))
          yield put(Actions.renderNews(response))
        }
        console.log(response.data[0])
        
      } catch (error) {
        console.log("SagaNewsError",error)
      }
}

export default function* sagaNews(){
    yield takeEvery(ActionTypes.LOAD_NEWS, loadData);
  }

