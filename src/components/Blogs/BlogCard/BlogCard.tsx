const styles = {
  blog_card: `w-80 h-96 bg-[#fff] border-zinc-600 shadow-md shadow-zinc-600 rounded mt-2`,
  img_box: `w-80 h-40 bg-[#fff7ed] rounded`,
  info_box: `p-4 tracking-wide`,
  title_box: `text-xl font-black`,
  content_box: `line-clamp-3 text-left tracking-normal my-3 text-slate-500 text-sm leading-6`,
  author_box: `italic text-sm text-slate-500`,
  footer: `w-full h-10 bg-[#fff7ed] flex items-center justify-between`,
  thumb_box: ``,
  btn_box: ` tracking-normal text-sm `,
  btn: `h-8 w-[100px] bg-[#FF004D] rounded flex justify-center items-center cursor-pointer`,
};
type BlogCard = {
  id: number;
  title: string;
  content: string;
  author: string;
};
export const BlogCard = ({ id, title, content, author }: BlogCard) => {
  return (
    <div className={styles.blog_card}>
      <div className={styles.img_box}>
        <img src="" alt="blog image" />
      </div>
      <div className={styles.info_box}>
        <div className={styles.title_box}>{title}</div>
        <div className={styles.author_box}>by: {author}</div>
        <div className={styles.content_box}>{content}...</div>
        <div className={styles.footer}>
          <div className={styles.thumb_box}></div>
          <div className={styles.btn_box}>
            <div className={styles.btn}>Read Moore</div>
          </div>
        </div>
      </div>
    </div>
  );
};
