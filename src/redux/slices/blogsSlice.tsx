import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Blog } from '../../assets/common/types';
import { blogsAPI } from '../../assets/api/blogsAPI';

const initialState = {
  blogs: [] as Blog[],
};
export const slice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload?.blogs;
    });
  },
});

const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  try {
    const res = await blogsAPI.fetchBlogs();
    const blogs = res.data;
    console.log(blogs);
    return { blogs };
  } catch (error) {}
});
export const blogs = slice.reducer;
export const blogsThunks = { fetchBlogs };
