import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { blogs } from './slices/blogsSlice';

export const store = configureStore({
  reducer: {
    blogs: blogs,
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
