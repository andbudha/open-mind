export type RequestStauts = 'idle' | 'loading';
export type BlogStatus = 'awaiting' | 'added' | 'deleted' | 'edited';
export type Rating = {
  likes: number;
  dislikes: number;
};
// export type Blog = {
//   id?: number | undefined;
//   title?: string | undefined;
//   content?: string | undefined;
//   author?: string | undefined;
//   image?: string | undefined;
//   rating?: Rating | undefined;
// };
export type Blog = {
  id: number;
  userId: number;
  title: string;
  content: string;
  author: string;
  image: string;
  rating: Rating;
};

export type InitialState = {
  blogs: Blog[];
  randomBlogImage: string;
  requestStatuts: RequestStauts;
  blogStatus: BlogStatus;
  currentPage: number;
  blogsPerPage: number;
};
