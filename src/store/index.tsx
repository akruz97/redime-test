import { configureStore } from '@reduxjs/toolkit';

import materialReducer from './reducers/materialReducer';
import categoryReducer from './reducers/categoryReducer';

export const store = configureStore({
  reducer: {
    material: materialReducer,
    category: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
