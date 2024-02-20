import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://1d811849dfc8e7d5.mokky.dev/blogs',
});

export const blogsAPI = {
  fetchBlogs: () => {
    return instance.get('');
  },
};
