import { useSelector } from 'react-redux';
import { AppRootState, useAppDispatch } from '../../redux/store';
import { Blog } from '../../assets/common/types';
import { BlogCard } from './BlogCard/BlogCard';
import { useEffect } from 'react';
import { blogsActions } from '../../redux/slices/blogsSlice';
import { Skeleton } from '../Skeleton/Skeleton';

const blogstyles = {
  main_box: `h-full w-[100%] flex flex-col items-center`,
  blogs: `h-full grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1  gap-x-12 gap-y-0`,
};

export const Blogs = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(blogsActions.editBlogStatus({ status: 'awaiting' }));
  }, []);
  const requestStatus = useSelector<AppRootState, string>(
    (state) => state.blogs.requestStatuts
  );

  const blogs = useSelector<AppRootState, Blog[]>((state) => state.blogs.blogs);
  const currentPage = useSelector<AppRootState, number>(
    (state) => state.blogs.currentPage
  );
  const blogsPerPage = useSelector<AppRootState, number>(
    (state) => state.blogs.blogsPerPage
  );

  const lastBlogIndex = currentPage * blogsPerPage;
  const firstBlogIndex = lastBlogIndex - blogsPerPage;
  const currnetBlogs = blogs.slice(firstBlogIndex, lastBlogIndex);
  const blogList = currnetBlogs.map((blog) => (
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
  const skeletonList = [...new Array(6)].map(() => <Skeleton />);
  return (
    <div className={blogstyles.main_box}>
      <div className={blogstyles.blogs}>
        {requestStatus === 'loading' ? skeletonList : blogList}
      </div>
    </div>
  );
};
