import { LuThumbsUp, LuThumbsDown } from 'react-icons/lu';
import { LiaBookReaderSolid } from 'react-icons/lia';
import { NavLink } from 'react-router-dom';
import defaultBlogImage from '../../../assets/images/blog_image/default_blog_img.avif';

const blogcard = {
  blog_card: `relative w-80 h-[430px] bg-[#fff] border-zinc-600 shadow-lg rounded-md my-6 hover:shadow-zinc-400 text-slate-500`,
  img_box: `w-full h-[200px] bg-[#fff7ed]`,
  img: `h-full w-full object-cover rounded-t-md`,
  info_box: `p-4 tracking-wide`,
  title_box: `text-md font-bold mb-2`,
  content_box: `line-clamp-3 text-left tracking-normal my-2 text-sm leading-6`,
  author_box: `italic text-sm`,
  footer: `absolute bottom-0 w-72 h-14 flex items-center justify-between`,
  thumb_box: `flex justify-around items-center w-32`,
  thumb_icon_box: `flex justify-around items-center w-12 h-8`,
  thumb_icon: `text-[#FC6736]`,
  likes: `text-sm`,
  btn_box: ` tracking-normal text-sm `,
  btn: `h-7 w-16 border border-orange-400 rounded-full text-[#FC6736] flex justify-center px-3 items-center cursor-pointer transition ease-in-out hover:-translate hover:scale-105 hover: duration-300 hover:bg-orange-400 hover:text-[#fff]`,
  reader_icon: `h-7 w-7`,
};
type BlogCard = {
  id: number | undefined;
  title: string | undefined;
  content: string | undefined;
  author: string | undefined;
  image: string | undefined;
};
export const BlogCard = ({ id, title, content, author, image }: BlogCard) => {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  let blogImage;
  if (image) {
    blogImage = urlRegex.test(image) ? image : defaultBlogImage;
  }

  return (
    <div className={blogcard.blog_card}>
      <div className={blogcard.img_box}>
        <img className={blogcard.img} src={blogImage} alt="blog image" />
      </div>
      <div className={blogcard.info_box}>
        <div className={blogcard.title_box}>{title}</div>
        <div className={blogcard.author_box}>by: {author}</div>
        <div className={blogcard.content_box}>{content}...</div>
        <div className={blogcard.footer}>
          <div className={blogcard.thumb_box}>
            <div className={blogcard.thumb_icon_box}>
              <LuThumbsUp className={blogcard.thumb_icon} />
              <div className={blogcard.likes}>{190}</div>
            </div>
            <div className={blogcard.thumb_icon_box}>
              <LuThumbsDown className={blogcard.thumb_icon} />
              <div className={blogcard.likes}>{120}</div>
            </div>
          </div>
          <NavLink to={`/blogs/${id}`}>
            <div className={blogcard.btn_box}>
              <div className={blogcard.btn}>
                <LiaBookReaderSolid className={blogcard.reader_icon} />
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
