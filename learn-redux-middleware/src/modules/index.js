import { combineReducers } from 'redux';
import counter from './counter';
import sample from './sample';
import loading from './loading';

const rootReducers = combineReducers({ counter, sample, loading });
export default rootReducers;
