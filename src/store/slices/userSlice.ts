/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// ------------- NOT A REAL LIFE EXAMPLE! -------------

type UserData = {
  name: string;
  email: string;
};

const initialState = {
  value: { name: '', email: '' } as UserData,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserData>) => {
      state.value = action.payload;
    },

    logout: state => {
      state.value = initialState.value;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
