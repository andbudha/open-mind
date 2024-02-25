import { useSelector } from 'react-redux';
import { AppRootState, useAppDispatch } from '../../redux/store';
import { Blog } from '../../assets/common/types';
import { BlogCard } from './BlogCard/BlogCard';
import { useEffect } from 'react';
import { blogsActions } from '../../redux/slices/blogsSlice';

const styles = {
  main_box: `h-full w-full flex justify-center items-center`,
  blogs: `h-full grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1  gap-10 mt-10`,
};

export const Blogs = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(blogsActions.editBlogStatus({ status: 'awaiting' }));
  }, []);
  const blogs = useSelector<AppRootState, Blog[]>((state) => state.blogs.blogs);
  const blogList = blogs.map((blog) => (
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
    <div className={styles.main_box}>
      <div className={styles.blogs}>{blogList}</div>
    </div>
  );
};
