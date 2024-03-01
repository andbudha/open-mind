import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { blogs } from './slices/blogsSlice';
import { auth } from './slices/authSlice';

export const store = configureStore({
  reducer: {
    blogs: blogs,
    auth: auth,
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
