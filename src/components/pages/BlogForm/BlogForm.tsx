import { useFormik } from 'formik';
import { AppRootState, useAppDispatch } from '../../../redux/store';
import { blogsThunks } from '../../../redux/slices/blogsSlice';
import { useSelector } from 'react-redux';

const blogform = {
  main_box: `container h-full w-full flex justify-center items-center`,
  blogform_box: `flex justify-center items-center min-h-[500px] w-[350px] border-[1px] border-orange-200 rounded shadow-md p-2`,
  form_box: `flex flex-col`,
  input: `h-[40px] w-[320px] border-[1px] border-orange-400 my-1 p-2 rounded focus:outline-none focus:ring-1 ring-orange-500 focus:border-orange-500`,
  textarea: `border-[1px] border-orange-400 my-1 p-2 rounded focus:outline-none focus:ring-1 ring-orange-500 focus:border-orange-500`,
  submit_btn: `h-[40px] w-[320px] text-[#FC6736] border-[1px] border-orange-400 my-1 p-2 rounded`,
  error_style: `text-xs text-red-700 mt-2 tracking-wide`,
};

type FormikValues = {
  id: number;
  author: string;
  title: string;
  image: string;
  content: string;
};

export const BlogForm = () => {
  const dispatch = useAppDispatch();
  const newRandomImage = useSelector<AppRootState, string>(
    (state) => state.blogs.randomBlogImage
  );

  const formik = useFormik({
    initialValues: {
      id: 0,
      author: '',
      title: '',
      image: '',
      content: '',
    },

    onSubmit: (values: FormikValues) => {
      dispatch(blogsThunks.postBlog({ ...values, image: newRandomImage }));
      console.log('ok');
    },
  });

  const getImageHandler = () => {
    dispatch(blogsThunks.fetchImage(formik.values.image));
  };
  return (
    <div className={blogform.main_box}>
      <div className={blogform.blogform_box}>
        <form className={blogform.form_box} onSubmit={formik.handleSubmit}>
          {formik.errors.author ? (
            <div className={blogform.error_style}>{formik.errors.author}</div>
          ) : null}
          <input
            className={blogform.input}
            id="author"
            name="author"
            type="text"
            placeholder="your name..."
            onChange={formik.handleChange}
            value={formik.values.author}
          />
          {formik.errors.title ? (
            <div className={blogform.error_style}>{formik.errors.title}</div>
          ) : null}
          <input
            className={blogform.input}
            id="title"
            name="title"
            type="text"
            placeholder="blog title..."
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.errors.image ? (
            <div className={blogform.error_style}>{formik.errors.image}</div>
          ) : null}
          <input
            className={blogform.input}
            id="image"
            name="image"
            type="text"
            placeholder="blog keyword..."
            onChange={formik.handleChange}
            value={formik.values.image}
            onBlur={getImageHandler}
          />
          {formik.errors.content ? (
            <div className={blogform.error_style}>{formik.errors.content}</div>
          ) : null}
          <textarea
            className={blogform.textarea}
            id="content"
            name="content"
            cols={20}
            rows={10}
            placeholder="blog content..."
            onChange={formik.handleChange}
            value={formik.values.content}
          />
          <button className={blogform.submit_btn} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
