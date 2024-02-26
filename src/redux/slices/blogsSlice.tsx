import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  Blog,
  BlogStatus,
  InitialState,
  RequestStauts,
} from '../../assets/common/types';
import { blogsAPI } from '../../assets/api/blogsAPI';
import { randomImageAPI } from '../../assets/api/randomImageAPI';

const initialState: InitialState = {
  blogs: [] as Blog[],
  randomBlogImage: '',
  requestStatuts: 'idle' as RequestStauts,
  blogStatus: 'awaiting' as BlogStatus,
  currentPage: 1,
  blogsPerPage: 6,
};
export const slice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    editBlogStatus: (state, action: PayloadAction<{ status: BlogStatus }>) => {
      state.blogStatus = action.payload.status;
    },
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        if (action.payload?.blogs) {
          state.blogs = action.payload?.blogs;
        }
      })
      .addCase(fetchImage.fulfilled, (state, action) => {
        state.randomBlogImage = action.payload?.newRandomImage;
      })
      .addCase(postBlog.pending, (state) => {
        state.requestStatuts = 'loading';
      })
      .addCase(postBlog.fulfilled, (state, action) => {
        state.blogStatus = 'added';
        state.requestStatuts = 'idle';
        state.blogs.push(action.payload?.newBlog);
      })
      .addCase(editBlog.pending, (state) => {
        state.requestStatuts = 'loading';
      })
      .addCase(editBlog.fulfilled, (state, action) => {
        state.requestStatuts = 'idle';
        state.blogStatus = 'edited';
        const index = state.blogs.findIndex(
          (blog) => blog.id === action.payload?.editedBlog.id
        );
        if (index !== -1) state.blogs[index] = action.payload?.editedBlog;
      })
      .addCase(deleteBlog.pending, (state) => {
        state.requestStatuts = 'loading';
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.requestStatuts = 'idle';
        state.blogStatus = 'deleted';
        const index = state.blogs.findIndex(
          (blog) => blog.id === action.payload?.id
        );
        if (index !== -1) state.blogs.splice(index, 1);
      });
  },
});

const fetchImage = createAsyncThunk(
  'blogs/fetchImage',
  async (term: string) => {
    try {
      const res = await randomImageAPI.fetchImage(term);
      const newRandomImage =
        res.data.results[Math.floor(Math.random() * 10)].urls.small;
      console.log(newRandomImage);
      return { newRandomImage };
    } catch (error) {}
  }
);
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

const editBlog = createAsyncThunk('blogs/editBlog', async (blog: Blog) => {
  try {
    const res = await blogsAPI.editBlog(blog);
    const editedBlog = res.data;
    return { editedBlog };
  } catch (error) {}
});

const deleteBlog = createAsyncThunk('blogs/deletBlog', async (id: number) => {
  try {
    const res = await blogsAPI.deleteBlog(id);
    const status = res.status;
    console.log(status);

    return { id, status };
  } catch (error) {}
});
export const blogs = slice.reducer;
export const blogsActions = slice.actions;
export const blogsThunks = {
  fetchBlogs,
  postBlog,
  fetchImage,
  editBlog,
  deleteBlog,
};
