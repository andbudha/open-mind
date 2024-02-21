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
    builder
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        if (action.payload?.blogs) {
          state.blogs = action.payload?.blogs;
        }
      })
      .addCase(postBlog.fulfilled, (state, action) => {
        state.blogs.unshift(action.payload?.newBlog);
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

const postBlog = createAsyncThunk('blogs/postBlog', async (blog: Blog) => {
  try {
    const res = await blogsAPI.postBlog(blog);
    const newBlog = res.data;
    console.log(newBlog);
    return { newBlog };
  } catch (error) {}
});
export const blogs = slice.reducer;
export const blogsThunks = { fetchBlogs, postBlog };
