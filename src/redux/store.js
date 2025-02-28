import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './reducers';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
