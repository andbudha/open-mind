import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { AppRootState } from '../../../redux/store';
import { Blog } from '../../../assets/common/types';
import { NavLink } from 'react-router-dom';
import { LuThumbsUp, LuThumbsDown } from 'react-icons/lu';

export const BlogPage = () => {
  const { id } = useParams();
  const blogs = useSelector<AppRootState, Blog[]>((state) => state.blogs.blogs);
  const blog = blogs.find((blog) => blog.id === Number(id));
  const blogpage = {
    main_box: `container h-svh w-full flex justify-center items-start text-slate-600`,
    blog_box: `min-h-[400px] max-w-[600px] min-w-[300px] mt-10 border border-orange-200 rounded-md shadow-lg`,
    header: `h-60 w-full flex justify-center items-center mt-4`,
    info_box: `min-h-40 h-40 w-60 flex flex-col justify-center`,
    img_box: `h-60 w-60 flex justify-center items-center`,
    img: `h-[200px] w-[200px] rounded-full shadow-xl`,
    title_box: `min-h-10 w-full flex justify-center items-center text-xl text-slate-700 font-bold p-2 `,
    author_box: `min-h-10 w-full flex justify-center items-center italic text-md p-2 `,
    content_box: `text-justify tracking-normal mx-8 my-2 text-md leading-6 leading-loose`,
    footer: `w-full h-20  flex items-center justify-between`,
    thumb_box: `flex justify-around items-center w-32 ml-6`,
    thumb_icon_box: `flex justify-around items-center w-12 h-8`,
    thumb_icon: `text-[#FC6736] cursor-pointer`,
    likes: `text-sm`,
    btn_box: ` tracking-normal text-sm mr-6`,
    btn: `h-7 w-24 border border-orange-400 rounded-full text-[#FC6736] flex justify-center px-3 items-center cursor-pointer transition ease-in-out hover:-translate hover:scale-105 hover: duration-300 hover:bg-orange-400 hover:text-[#fff]`,
    reader_icon: `h-7 w-7`,
  };
  return (
    <div className={blogpage.main_box}>
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
          <NavLink to={`${id}`}>
            <div className={blogpage.btn_box}>
              <div className={blogpage.btn}>edit post</div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
