import { combineReducers } from 'redux';

import { userAuthReducer } from './userAuthReducer';
import { candidatesReducer } from './candidatesReducer';
import { eventsReducer } from './eventsReducer';
import { eventResponseReducer } from './eventResponseReducer';
import { categoriesReducer } from './categoriesReducer';
import { profilesReducer } from './profilesReducer';

export const rootReducer = combineReducers({
  user: userAuthReducer,
  candidates: candidatesReducer,
  events: eventsReducer,
  eventsResponse: eventResponseReducer,
  categories: categoriesReducer,
  profiles: profilesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
