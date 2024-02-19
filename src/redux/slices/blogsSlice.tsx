import { createSlice } from '@reduxjs/toolkit';
type Blog = {
  id: number;
  title: string;
  content: string;
  author: string;
};
const initialState = {
  blogs: [
    {
      id: 1,
      title: 'Old to learn coding!',
      content: `It's never too late to learn a programming language. Some job seekers who are older may initially doubt their ability to learn coding because of a lack of experience or fear of employment bias. But, the reality is that learning a new skill takes time and dedication, no matter your age.`,
      author: 'Andrei Bartov',
    },
    {
      id: 2,
      title: 'Old to learn coding!',
      content: `It's never too late to learn a programming language. Some job seekers who are older may initially doubt their ability to learn coding because of a lack of experience or fear of employment bias. But, the reality is that learning a new skill takes time and dedication, no matter your age.`,
      author: 'Andrei Bartov',
    },
    {
      id: 3,
      title: 'Old to learn coding!',
      content: `It's never too late to learn a programming language. Some job seekers who are older may initially doubt their ability to learn coding because of a lack of experience or fear of employment bias. But, the reality is that learning a new skill takes time and dedication, no matter your age.`,
      author: 'Andrei Bartov',
    },
    {
      id: 4,
      title: 'Old to learn coding!',
      content: `It's never too late to learn a programming language. Some job seekers who are older may initially doubt their ability to learn coding because of a lack of experience or fear of employment bias. But, the reality is that learning a new skill takes time and dedication, no matter your age.`,
      author: 'Andrei Bartov',
    },
  ] as Blog[],
};
export const slice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
});

export const blogs = slice.reducer;