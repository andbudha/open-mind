export type Blog = {
  id: number;
  title: string;
  content: string;
  author: string;
  image: string;
};

export type InitialState = {
  blogs: Blog[];
  randomBlogImage: string;
};
