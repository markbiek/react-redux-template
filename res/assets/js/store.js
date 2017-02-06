import { createStore, combineReducers } from 'redux';
import { testReducer } from './reducers/Test/reducer';

const reducers = combineReducers({
    testState: testReducer
});

const store = createStore(reducers);

export default store;
