import { configureStore } from '@reduxjs/toolkit';
import chatSlice from '../slices/chatSlice';

const store = configureStore({
  reducer: {
    chat: chatSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;