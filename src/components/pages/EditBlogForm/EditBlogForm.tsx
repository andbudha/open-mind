import { useFormik } from 'formik';
import { AppRootState, useAppDispatch } from '../../../redux/store';
import { blogsThunks } from '../../../redux/slices/blogsSlice';
import { useSelector } from 'react-redux';
import { Loader } from '../../Loader/Loader';
import {
  Blog,
  BlogStatus,
  FormikCommonValues,
  RequestStauts,
} from '../../../assets/common/types';
import { Navigate, useParams } from 'react-router';

const editblogform = {
  main_box: `relative container h-full w-full flex justify-center items-center text-slate-500 my-12 bg-[#fafafa]`,
  blogform_box: `container flex justify-center items-center min-h-[500px] min-w-[340px] max-w-[600px] border-[1px] border-orange-200 rounded shadow-md p-3 bg-[#fff]`,
  form_box: `flex flex-col items-center h-full w-full`,
  input: `text-sm tracking-wider h-[40px] w-full border-[1px] border-orange-400 my-1 p-2 rounded focus:outline-none focus:ring-1 ring-orange-500 focus:border-orange-500`,
  textarea: `text-sm  tracking-wider w-full min-h-[350px] border-[1px] border-orange-400 my-1 p-2 rounded focus:outline-none focus:ring-1 ring-orange-500 focus:border-orange-500`,
  submit_btn: `tracking-wider  h-[40px] w-full text-[#FC6736] border-[1px] border-orange-400 my-1 p-2 rounded transition ease-in-out  hover: duration-300 hover:bg-orange-400 hover:text-[#fff]`,
  error_style: `w-full text-xs text-red-700 mt-2 tracking-wider`,
};

export const EditBlogForm = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const blogStatus = useSelector<AppRootState, BlogStatus>(
    (state) => state.blogs.blogStatus
  );
  const blogs = useSelector<AppRootState, Blog[]>((state) => state.blogs.blogs);
  const blog = blogs.find((blog) => blog.id === Number(id));

  const requestStatuts = useSelector<AppRootState, RequestStauts>(
    (state) => state.blogs.requestStatuts
  );

  const validate = (values: FormikCommonValues) => {
    const errors: FormikCommonValues = {};
    if (!values.author) {
      errors.author = 'Full name is required';
    }

    if (!values.title) {
      errors.title = 'Blog title is required';
    }
    if (!values.content) {
      errors.content = 'Blog content is required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      ...blog,
    },
    validate,
    onSubmit: (values) => {
      dispatch(blogsThunks.editBlog(values));
    },
  });

  if (blogStatus === 'edited') {
    return <Navigate to={`/blogs/${id}`} />;
  }
  return (
    <div className={editblogform.main_box}>
      {requestStatuts === 'loading' && <Loader />}
      <div className={editblogform.blogform_box}>
        <form className={editblogform.form_box} onSubmit={formik.handleSubmit}>
          {formik.errors.author ? (
            <div className={editblogform.error_style}>
              {formik.errors.author}
            </div>
          ) : null}
          <input
            className={editblogform.input}
            id="author"
            name="author"
            type="text"
            placeholder="your name..."
            onChange={formik.handleChange}
            value={formik.values.author}
          />
          {formik.errors.title ? (
            <div className={editblogform.error_style}>
              {formik.errors.title}
            </div>
          ) : null}
          <input
            className={editblogform.input}
            id="title"
            name="title"
            type="text"
            placeholder="blog title..."
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.errors.content ? (
            <div className={editblogform.error_style}>
              {formik.errors.content}
            </div>
          ) : null}
          <textarea
            className={editblogform.textarea}
            id="content"
            name="content"
            placeholder="blog content..."
            onChange={formik.handleChange}
            value={formik.values.content}
          />
          <button className={editblogform.submit_btn} type="submit">
            save changes
          </button>
        </form>
      </div>
    </div>
  );
};
