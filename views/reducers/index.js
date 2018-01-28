import { combineReducers } from 'redux';
import navbar from './navbar-reducer';
import provider from './track-reducer';
export default combineReducers({
  navbar,
  provider
});
