import { useSelector } from 'react-redux';
import { AppRootState, useAppDispatch } from '../../redux/store';
import { Blog } from '../../assets/types/blog_types';
import { BlogCard } from './BlogCard/BlogCard';
import { useEffect } from 'react';
import { blogsActions } from '../../redux/slices/blogsSlice';
import { Skeleton } from '../Skeleton/Skeleton';
import { LoggedInResponse } from '../../assets/types/auth_types';

const blogstyles = {
  main_box: `h-full w-[100%] flex flex-col items-center`,
  blogs: `h-full grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1  gap-x-12 gap-y-0`,
};

export const MyBlogs = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(blogsActions.editBlogStatus({ status: 'awaiting' }));
  }, []);
  const loggedInUser = useSelector<AppRootState, LoggedInResponse>(
    (state) => state.auth.user
  );
  const requestStatus = useSelector<AppRootState, string>(
    (state) => state.blogs.requestStatuts
  );

  const blogs = useSelector<AppRootState, Blog[]>((state) => state.blogs.blogs);
  const myBlogs = blogs.filter((blog) => blog.userId === loggedInUser.data.id);

  const MyBlogList = myBlogs.map((blog) => (
    <BlogCard
      key={blog.id}
      id={blog.id}
      title={blog.title}
      content={blog.content}
      author={blog.author}
      image={blog.image}
      likes={blog.rating?.likes}
      dislikes={blog.rating?.dislikes}
    />
  ));
  const skeletonList = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  return (
    <div className={blogstyles.main_box}>
      <div className={blogstyles.blogs}>
        {requestStatus === 'loading' ? skeletonList : MyBlogList}
      </div>
    </div>
  );
};
