import { useSelector } from 'react-redux';
import { AppRootState, useAppDispatch } from '../../redux/store';
import { Blog } from '../../assets/common/types';
import { BlogCard } from './BlogCard/BlogCard';
import { useEffect } from 'react';
import { blogsActions } from '../../redux/slices/blogsSlice';

const blogstyles = {
  main_box: `h-full w-[100%] flex flex-col items-center`,
  blogs: `h-full grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1  gap-x-12 gap-y-0`,
};

export const Blogs = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(blogsActions.editBlogStatus({ status: 'awaiting' }));
  }, []);

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
    />
  ));
  return (
    <div className={blogstyles.main_box}>
      <div className={blogstyles.blogs}>{blogList}</div>
    </div>
  );
};
