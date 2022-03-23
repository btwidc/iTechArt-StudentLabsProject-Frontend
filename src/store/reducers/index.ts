import { combineReducers } from 'redux';

import { userAuthReducer } from './userAuthReducer';
import { candidatesReducer } from './candidatesReducer';

export const rootReducer = combineReducers({
  user: userAuthReducer,
  candidates: candidatesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
