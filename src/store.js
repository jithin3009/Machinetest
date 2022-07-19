import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/Itemreducer';
const middleware = [thunk]

const store = createStore(
    reducer,
    applyMiddleware(...middleware))
;

export default store;