import { combineReducers } from 'redux';
import app from './app';
import filters from './filters';

export default combineReducers({
  app,
  filters
});
