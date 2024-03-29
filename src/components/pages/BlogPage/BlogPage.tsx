import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router';
import { AppRootState, useAppDispatch } from '../../../redux/store';
import {
  Blog,
  BlogStatus,
  RequestStauts,
} from '../../../assets/types/blog_types';
import { NavLink } from 'react-router-dom';
import { LuThumbsUp, LuThumbsDown } from 'react-icons/lu';
import { blogsActions, blogsThunks } from '../../../redux/slices/blogsSlice';
import { Loader } from '../../Loader/Loader';
import { useEffect } from 'react';

const blogPage = {
  main_box: `h-full w-full flex justify-center items-start text-slate-600 bg-[#fafafa]`,
  blog_box: `min-h-[400px] max-w-[800px] min-w-[300px] my-10 border border-orange-200 rounded-md shadow-lg  bg-[#fff]`,
  img_box: `w-full flex justify-center items-center my-6`,
  img: `h-64 w-[100%] object-cover rounded-md shadow-xl  mx-8`,
  info_box: `min-h-30 w-full flex flex-col justify-center px-8 `,
  title_box: `min-h-10 w-full flex justify-sart items-center text-xl text-slate-700 font-bold `,
  author_box: `min-h-10 w-full flex justify-start items-center italic text-md`,
  content_box: `text-justify tracking-normal mx-8 my-2 text-md leading-6 leading-loose`,
  footer: `w-full h-20  flex items-center justify-between`,
  thumb_box: `flex justify-around items-center w-32 ml-6`,
  thumb_icon_box: `flex justify-around items-center w-12 h-8`,
  thumb_icon: `text-[#FBA834] cursor-pointer`,
  likes: `text-sm`,
  btn_box: `w-48 flex justify-between tracking-normal text-sm mr-6`,
  btn: `h-7 w-22 border border-[#FBA834] rounded-full text-[#FBA834] flex justify-center px-3 items-center cursor-pointer transition ease-in-out hover:-translate hover:scale-105 hover: duration-300 hover:bg-[#FBA834] hover:text-[#fff]`,
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
  const authorized = useSelector<AppRootState, boolean>(
    (state) => state.auth.authorized
  );
  const blogs = useSelector<AppRootState, Blog[]>((state) => state.blogs.blogs);
  const blog = blogs.find((blog) => blog.id === Number(id));
  const deleteOnClick = () => {
    dispatch(blogsThunks.deleteBlog(Number(id)));
  };

  const likeOnClick = (blog: Blog | undefined) => {
    console.log('ok');
  };

  if (postStatus === 'deleted') {
    return <Navigate to={'/'} />;
  }
  return (
    <div className={blogPage.main_box}>
      {requestStatuts === 'loading' && <Loader />}
      <div className={blogPage.blog_box}>
        <div className={blogPage.img_box}>
          <img className={blogPage.img} src={blog?.image} alt="blog-image" />
        </div>
        <div className={blogPage.info_box}>
          <div className={blogPage.title_box}>{blog?.title}</div>
          <div className={blogPage.author_box}> by: {blog?.author}</div>
        </div>
        <div className={blogPage.content_box}>{blog?.content}</div>
        <div className={blogPage.footer}>
          <div className={blogPage.thumb_box}>
            <div className={blogPage.thumb_icon_box}>
              <LuThumbsUp
                className={blogPage.thumb_icon}
                onClick={() => likeOnClick(blog)}
              />
              <div className={blogPage.likes}>{blog?.rating?.likes}</div>
            </div>
            <div className={blogPage.thumb_icon_box}>
              <LuThumbsDown className={blogPage.thumb_icon} />
              <div className={blogPage.likes}>{blog?.rating?.dislikes}</div>
            </div>
          </div>

          {authorized && (
            <div className={blogPage.btn_box}>
              <NavLink to={`/blogs/${blog?.id}/editblogform`}>
                <div className={blogPage.btn}>edit post</div>
              </NavLink>
              <div className={blogPage.btn} onClick={deleteOnClick}>
                delete post
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
