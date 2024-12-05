import { configureStore } from '@reduxjs/toolkit';
import { vigenereCipherReducer } from '../features/VigenereCipher/vigenereCipherSlice.ts';

export const store = configureStore({
  reducer: {
    vigenereCipher: vigenereCipherReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;