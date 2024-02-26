import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router';
import { AppRootState, useAppDispatch } from '../../../redux/store';
import { Blog, BlogStatus, RequestStauts } from '../../../assets/common/types';
import { NavLink } from 'react-router-dom';
import { LuThumbsUp, LuThumbsDown } from 'react-icons/lu';
import { blogsActions, blogsThunks } from '../../../redux/slices/blogsSlice';
import { Loader } from '../../Loader/Loader';
import { useEffect } from 'react';

const blogpage = {
  main_box: `h-full w-full flex justify-center items-start text-slate-600 bg-[#fafafa]`,
  blog_box: `min-h-[400px] max-w-[800px] min-w-[300px] my-10 border border-orange-200 rounded-md shadow-lg  bg-[#fff]`,
  header: `h-60 w-full flex justify-center items-center mt-4`,
  info_box: `min-h-40 h-40 w-60 flex flex-col justify-center`,
  img_box: `h-60 w-60 flex justify-center items-center`,
  img: `h-full w-full object-cover rounded-full shadow-xl`,
  //img: `h-[200px] w-[200px] rounded-full shadow-xl`,
  title_box: `min-h-10 w-full flex justify-sart items-center text-xl text-slate-700 font-bold p-2 `,
  author_box: `min-h-10 w-full flex justify-start items-center italic text-md p-2 `,
  content_box: `text-justify tracking-normal mx-8 my-2 text-md leading-6 leading-loose`,
  footer: `w-full h-20  flex items-center justify-between`,
  thumb_box: `flex justify-around items-center w-32 ml-6`,
  thumb_icon_box: `flex justify-around items-center w-12 h-8`,
  thumb_icon: `text-[#FC6736] cursor-pointer`,
  likes: `text-sm`,
  btn_box: `w-48 flex justify-between tracking-normal text-sm mr-6`,
  btn: `h-7 w-22 border border-orange-400 rounded-full text-[#FC6736] flex justify-center px-3 items-center cursor-pointer transition ease-in-out hover:-translate hover:scale-105 hover: duration-300 hover:bg-orange-400 hover:text-[#fff]`,
  reader_icon: `h-7 w-7`,
};

export const BlogPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(blogsActions.editBlogStatus({ status: 'awaiting' }));
  }, []);
  const requestStatuts = useSelector<AppRootState, RequestStauts>(
    (state) => state.blogs.requestStatuts
  );
  const postStatus = useSelector<AppRootState, BlogStatus>(
    (state) => state.blogs.blogStatus
  );
  const blogs = useSelector<AppRootState, Blog[]>((state) => state.blogs.blogs);
  const blog = blogs.find((blog) => blog.id === Number(id));
  const deleteOnClick = () => {
    dispatch(blogsThunks.deleteBlog(Number(id)));
  };

  if (postStatus === 'deleted') {
    return <Navigate to={'/'} />;
  }
  return (
    <div className={blogpage.main_box}>
      {requestStatuts === 'loading' && <Loader />}
      <div className={blogpage.blog_box}>
        <div className={blogpage.header}>
          <div className={blogpage.info_box}>
            <div className={blogpage.title_box}>{blog?.title}</div>
            <div className={blogpage.author_box}> by: {blog?.author}</div>
          </div>
          <div className={blogpage.img_box}>
            <img className={blogpage.img} src={blog?.image} alt="blog-image" />
          </div>
        </div>
        <div className={blogpage.content_box}>{blog?.content}</div>
        <div className={blogpage.footer}>
          <div className={blogpage.thumb_box}>
            <div className={blogpage.thumb_icon_box}>
              <LuThumbsUp className={blogpage.thumb_icon} />
              <div className={blogpage.likes}>{190}</div>
            </div>
            <div className={blogpage.thumb_icon_box}>
              <LuThumbsDown className={blogpage.thumb_icon} />
              <div className={blogpage.likes}>{120}</div>
            </div>
          </div>

          <div className={blogpage.btn_box}>
            <NavLink to={`/editblogform/${blog?.id}`}>
              <div className={blogpage.btn}>edit post</div>
            </NavLink>
            <div className={blogpage.btn} onClick={deleteOnClick}>
              delete post
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
