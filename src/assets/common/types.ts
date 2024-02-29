export type RequestStauts = 'idle' | 'loading';
export type BlogStatus = 'awaiting' | 'added' | 'deleted' | 'edited';
type Rating = {
  likes: number;
  dislikes: number;
};
export type Blog = {
  id?: number | undefined;
  title?: string | undefined;
  content?: string | undefined;
  author?: string | undefined;
  image?: string | undefined;
  rating?: Rating | undefined;
};

export type InitialState = {
  blogs: Blog[];
  randomBlogImage: string;
  requestStatuts: RequestStauts;
  blogStatus: BlogStatus;
  currentPage: number;
  blogsPerPage: number;
};

export type FormikCommonValues = {
  id?: number;
  author?: string;
  title?: string;
  image?: string;
  content?: string;
};
