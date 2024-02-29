import axios from 'axios';
import { Blog } from '../common/types';

const instance = axios.create({
  baseURL: 'https://1d811849dfc8e7d5.mokky.dev/blogs',
});

export const blogsAPI = {
  fetchBlogs: () => {
    return instance.get<Blog[]>('');
  },
  postBlog: (blog: Blog) => {
    return instance.post('', blog);
  },
  editBlog: (blog: Blog) => {
    return instance.patch(`/${blog.id}`, blog);
  },
  deleteBlog: (id: number) => {
    return instance.delete(`/${id}`);
  },
  increaseLikes: (blog: Blog | undefined) => {
    return instance.patch(`/${blog?.id}`, { ...blog });
  },
};
