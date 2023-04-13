import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/searchSlice';
import formReducer from './reducers/formSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { animeApi } from 'services/animeApi';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    form: formReducer,
    [animeApi.reducerPath]: animeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animeApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
