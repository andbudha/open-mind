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
};
