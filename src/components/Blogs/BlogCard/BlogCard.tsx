import { LuThumbsUp, LuThumbsDown } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import defaultBlogImage from '../../../assets/images/blog_image/default_blog_img.avif';

const styles = {
  blog_card: `w-80 h-96 bg-[#fff] border-zinc-600 shadow-lg rounded-md my-6 hover:shadow-zinc-400`,
  img_box: `w-80 h-40 bg-[#fff7ed]`,
  img: `w-full h-40 rounded-t-md`,
  info_box: `p-4 tracking-wide`,
  title_box: `text-lg font-medium text-slate-500 mb-2`,
  content_box: `line-clamp-3 text-left tracking-normal my-3 text-slate-500 text-sm leading-6`,
  author_box: `italic text-sm text-slate-500`,
  footer: `w-full h-12  flex items-center justify-between`,
  thumb_box: `flex justify-around items-center w-32`,
  thumb_icon_box: `flex justify-around items-center w-12 h-8`,
  thumb_icon: `cursor-pointer text-[#FC6736] transition ease-in-out hover:-translate-y-1 hover:scale-110 hover: duration-300`,
  likes: `text-sm text-slate-500`,
  btn_box: ` tracking-normal text-sm `,
  btn: `h-7 w-20 border border-orange-400 rounded text-[#FC6736] flex justify-center px-3 items-center cursor-pointer transition ease-in-out hover:-translate hover:scale-105 hover: duration-300`,
};
type BlogCard = {
  id: number;
  title: string;
  content: string;
  author: string;
  image: string;
};
export const BlogCard = ({ id, title, content, author, image }: BlogCard) => {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  const blogImage = urlRegex.test(image) ? image : defaultBlogImage;
  return (
    <div className={styles.blog_card}>
      <div className={styles.img_box}>
        <img className={styles.img} src={blogImage} alt="blog image" />
      </div>
      <div className={styles.info_box}>
        <div className={styles.title_box}>{title}</div>
        <div className={styles.author_box}>by: {author}</div>
        <div className={styles.content_box}>{content}...</div>
        <div className={styles.footer}>
          <div className={styles.thumb_box}>
            <div className={styles.thumb_icon_box}>
              <LuThumbsUp className={styles.thumb_icon} />
              <div className={styles.likes}>{190}</div>
            </div>
            <div className={styles.thumb_icon_box}>
              <LuThumbsDown className={styles.thumb_icon} />
              <div className={styles.likes}>{120}</div>
            </div>
          </div>
          <NavLink to={`${id}`}>
            <div className={styles.btn_box}>
              <div className={styles.btn}>Read</div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
