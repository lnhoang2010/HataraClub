import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga'
import devToolsEnhancer, {composeWithDevTools} from 'remote-redux-devtools';
import reducers from './../reducers';
import rootSagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers(reducers);
const composeEnhancer = composeWithDevTools({port:8000})
const Store = createStore(rootReducer, composeEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSagas);
export default Store;