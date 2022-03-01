import { combineReducers } from 'redux';

import { userAuthReducer } from './userAuthReducer';

export const rootReducer = combineReducers({
  user: userAuthReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
