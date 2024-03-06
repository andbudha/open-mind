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

type LoggedInResponseData = {
  firstName: string;
  secondName: string;
  email: string;
  id: number;
};
export type LoggedInResponse = {
  token: string;
  data: LoggedInResponseData;
};

type RegisterResponseData = {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  id: number;
};
export type RegisterResponse = {
  token: string;
  data: RegisterResponseData;
};
