import { combineReducers } from 'redux';

import { userAuthReducer } from './userAuthReducer';
import { candidatesReducer } from './candidatesReducer';
import { eventsReducer } from './eventsReducer';
import { categoriesReducer } from './categoriesReducer';
import { profilesReducer } from './profilesReducer';

export const rootReducer = combineReducers({
  user: userAuthReducer,
  candidates: candidatesReducer,
  events: eventsReducer,
  categories: categoriesReducer,
  profiles: profilesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
