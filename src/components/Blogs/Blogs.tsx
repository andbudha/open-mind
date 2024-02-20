import { useSelector } from 'react-redux';
import { AppRootState } from '../../redux/store';
import { Blog } from '../../assets/common/types';
import { BlogCard } from './BlogCard/BlogCard';

const styles = {
  main_box: `container flex justify-center items-center`,
  blogs: `grid lg:grid-cols-2 md:grid-cols-1  gap-8 `,
};

export const Blogs = () => {
  const blogs = useSelector<AppRootState, Blog[]>((state) => state.blogs.blogs);

  const blogList = blogs.map((blog) => (
    <BlogCard
      key={blog.id}
      id={blog.id}
      title={blog.title}
      content={blog.content}
      author={blog.author}
    />
  ));
  return (
    <div className={styles.main_box}>
      <div className={styles.blogs}>{blogList}</div>
    </div>
  );
};
