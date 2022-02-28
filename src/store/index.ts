import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import planetsReducer from './slices/planetsSlice';
import counterReducer from './slices/counterSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    planets: planetsReducer,
    counter: counterReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
// export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
